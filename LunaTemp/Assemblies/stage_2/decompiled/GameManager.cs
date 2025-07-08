using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class GameManager : Singleton<GameManager>
{
	[Header("Prefabs")]
	public GameObject goodsPrefab;

	public GameObject casePrefab;

	[Header("Layout Settings")]
	public Vector3 startPosition = Vector3.zero;

	public float spacingX = 0.5f;

	public float spacingY = 0.7f;

	public int pyramidLayers = 9;

	[Header("Databases")]
	public CaseDatabase caseDatabase;

	public GoodsDatabase goodsDatabase;

	private Case[] cases;

	private List<Goods> spawnedGoods = new List<Goods>();

	private Dictionary<int, List<Case>> layerCases = new Dictionary<int, List<Case>>();

	public bool IsInitialized { get; private set; } = false;


	public IEnumerator FullInitializeRoutine()
	{
		IsInitialized = false;
		GeneratePyramid();
		yield return null;
		SpawnGoods();
		yield return null;
		ShuffleGoods();
		yield return null;
		IsInitialized = true;
	}

	public void Start()
	{
		GeneratePyramid();
		SpawnGoods();
		ShuffleGoods();
	}

	public void GeneratePyramid()
	{
		ClearExistingPyramid();
		GeneratePyramidCases();
	}

	public void SpawnGoods()
	{
		ClearExistingGoods();
		SpawnAndPlaceGoods();
	}

	public void ShuffleGoods()
	{
		if (spawnedGoods.Count == 0)
		{
			Debug.LogWarning("굿즈 생성 먼저");
		}
		else
		{
			ShuffleGoodsAcrossLayers();
		}
	}

	private void ClearExistingPyramid()
	{
		if (cases != null)
		{
			Case[] array = cases;
			foreach (Case c in array)
			{
				if (c != null && c.gameObject != null)
				{
					Object.Destroy(c.gameObject);
				}
			}
		}
		cases = null;
		layerCases.Clear();
		spawnedGoods.Clear();
	}

	private void ClearExistingGoods()
	{
		foreach (Goods goods in spawnedGoods)
		{
			if (goods != null && goods.gameObject != null)
			{
				Object.Destroy(goods.gameObject);
			}
		}
		spawnedGoods.Clear();
		if (cases == null)
		{
			return;
		}
		Case[] array = cases;
		foreach (Case c in array)
		{
			if (c != null)
			{
				c.RemoveGoods();
			}
		}
	}

	private void GeneratePyramidCases()
	{
		int totalSlots = pyramidLayers * (pyramidLayers + 1) / 2;
		cases = new Case[totalSlots];
		layerCases = new Dictionary<int, List<Case>>();
		int index = 0;
		for (int layer = 0; layer < pyramidLayers; layer++)
		{
			float y = startPosition.y + (float)layer * spacingY;
			int slotCount = pyramidLayers - layer;
			float startX = startPosition.x - (float)(slotCount - 1) * spacingX * 0.5f;
			int colorIndex = Mathf.Clamp(layer, 0, caseDatabase.caseMaterialList.Count - 1);
			layerCases[layer] = new List<Case>();
			for (int col = 0; col < slotCount; col++)
			{
				Vector3 pos = new Vector3(startX + (float)col * spacingX, y, startPosition.z);
				GameObject slot = Object.Instantiate(casePrefab, pos, Quaternion.identity);
				Case caseComp = slot.GetComponent<Case>();
				caseComp.currentLayer = layer;
				Renderer rend = slot.GetComponent<Renderer>();
				if (rend != null)
				{
					Material mat = caseDatabase.GetMaterialByIndex(colorIndex);
					if (mat != null)
					{
						rend.material = mat;
					}
				}
				cases[index] = caseComp;
				layerCases[layer].Add(caseComp);
				index++;
			}
		}
	}

	private void SpawnAndPlaceGoods()
	{
		int totalGoods = cases.Length - 1;
		int caseIndex = 0;
		for (int layer = 0; layer < pyramidLayers; layer++)
		{
			int slotCount = pyramidLayers - layer;
			for (int col = 0; col < slotCount; col++)
			{
				if (caseIndex >= totalGoods)
				{
					caseIndex++;
					continue;
				}
				Material mat = goodsDatabase.GetMaterialByIndex(layer);
				if (mat == null)
				{
					caseIndex++;
					continue;
				}
				GameObject goodsGO = Object.Instantiate(goodsPrefab, Vector3.zero, Quaternion.identity);
				Goods goods = goodsGO.GetComponent<Goods>();
				goods.originLayer = layer;
				Renderer rend = goodsGO.GetComponent<Renderer>();
				if (rend != null)
				{
					rend.material = mat;
				}
				if (cases[caseIndex] != null)
				{
					cases[caseIndex].SetThisGoods(goods);
				}
				spawnedGoods.Add(goods);
				caseIndex++;
			}
		}
	}

	private void ShuffleGoodsAcrossLayers()
	{
		if (cases == null || cases.Length == 0)
		{
			Debug.LogWarning("케이스 먼저");
			return;
		}
		Dictionary<int, List<int>> layerToIndices = new Dictionary<int, List<int>>();
		int currentSlot = 0;
		for (int layer = 0; layer < pyramidLayers; layer++)
		{
			int slotCount = pyramidLayers - layer;
			layerToIndices[layer] = new List<int>();
			for (int col = 0; col < slotCount; col++)
			{
				if (currentSlot < cases.Length && cases[currentSlot] != null && !cases[currentSlot].IsEmpty())
				{
					layerToIndices[layer].Add(currentSlot);
				}
				currentSlot++;
			}
		}
		List<int> shuffleSlots = new List<int>();
		foreach (KeyValuePair<int, List<int>> pair in layerToIndices)
		{
			if (pair.Value.Count > 1)
			{
				int shuffleCount = Mathf.Max(1, Random.Range(1, pair.Value.Count));
				List<int> shuffled = new List<int>(pair.Value);
				for (int l = 0; l < shuffled.Count; l++)
				{
					int rand2 = Random.Range(l, shuffled.Count);
					int index = l;
					List<int> list = shuffled;
					int index2 = rand2;
					int num = shuffled[rand2];
					int num2 = shuffled[l];
					int num4 = (shuffled[index] = num);
					num4 = (list[index2] = num2);
				}
				for (int k = 0; k < shuffleCount; k++)
				{
					shuffleSlots.Add(shuffled[k]);
				}
			}
		}
		if (shuffleSlots.Count < 2)
		{
			return;
		}
		for (int j = 0; j < shuffleSlots.Count; j++)
		{
			int rand = Random.Range(j, shuffleSlots.Count);
			int index2 = j;
			List<int> list = shuffleSlots;
			int index = rand;
			int num2 = shuffleSlots[rand];
			int num = shuffleSlots[j];
			int num4 = (shuffleSlots[index2] = num2);
			num4 = (list[index] = num);
		}
		int count = ((shuffleSlots.Count % 2 == 0) ? shuffleSlots.Count : (shuffleSlots.Count - 1));
		for (int i = 0; i < count; i += 2)
		{
			int fromIndex = shuffleSlots[i];
			int toIndex = shuffleSlots[i + 1];
			if (fromIndex != toIndex && fromIndex < cases.Length && toIndex < cases.Length && !(cases[fromIndex] == null) && !(cases[toIndex] == null))
			{
				Case fromCase = cases[fromIndex];
				Case toCase = cases[toIndex];
				Goods fromGoods = fromCase.GetCurrentGoods();
				Goods toGoods = toCase.GetCurrentGoods();
				if (fromGoods != null && toGoods != null)
				{
					fromCase.RemoveGoods();
					toCase.RemoveGoods();
					fromCase.SetThisGoods(toGoods);
					toCase.SetThisGoods(fromGoods);
				}
			}
		}
	}

	private List<int> GetLayerSlotIndices(int layer)
	{
		List<int> result = new List<int>();
		int count = 0;
		for (int j = 0; j < pyramidLayers; j++)
		{
			int slotCount = pyramidLayers - j;
			if (j == layer)
			{
				for (int i = 0; i < slotCount; i++)
				{
					result.Add(count + i);
				}
				break;
			}
			count += slotCount;
		}
		return result;
	}

	public void CheckLayerClear(int layer)
	{
		if (layer >= pyramidLayers - 1 || !layerCases.ContainsKey(layer))
		{
			return;
		}
		bool allMatched = true;
		foreach (Case c in layerCases[layer])
		{
			if (c == null || !c.HasMatchingGoods())
			{
				allMatched = false;
				break;
			}
		}
		if (allMatched)
		{
			Vector3 effectPos = new Vector3(0f, layerCases[layer][0].transform.position.y, 0f);
			Singleton<EffectManager>.Instance.ShowGoodImage(effectPos);
			ClearLayerSimple(layer);
		}
	}

	private void ClearLayerSimple(int layer)
	{
		if (!layerCases.ContainsKey(layer))
		{
			return;
		}
		List<Case> casesToRemove = new List<Case>(layerCases[layer]);
		layerCases.Remove(layer);
		foreach (Case c in casesToRemove)
		{
			if (c == null)
			{
				continue;
			}
			if (!c.IsEmpty())
			{
				Goods goods = c.GetCurrentGoods();
				if (goods != null)
				{
					spawnedGoods.Remove(goods);
					Object.Destroy(goods.gameObject);
				}
			}
			Vector3 effectPos = c.transform.position;
			Object.Destroy(c.gameObject);
			for (int i = 0; i < cases.Length; i++)
			{
				if (cases[i] == c)
				{
					cases[i] = null;
					break;
				}
			}
			Singleton<EffectManager>.Instance.PopClearEffect(effectPos);
		}
		MoveLayersDown(layer + 1);
	}

	private void MoveLayersDown(int startLayer)
	{
		for (int layer = startLayer; layer < pyramidLayers; layer++)
		{
			if (!layerCases.TryGetValue(layer, out var caseList))
			{
				continue;
			}
			Case[] array = caseList.ToArray();
			foreach (Case c in array)
			{
				if (c == null || !c.gameObject)
				{
					continue;
				}
				Vector3 newPos = c.transform.position;
				newPos.y -= spacingY;
				if (!c.IsEmpty() && c.GetCurrentGoods() != null)
				{
					Goods goods = c.GetCurrentGoods();
					goods.transform.SetParent(null);
					c.transform.DOMoveY(newPos.y, 0.3f).SetEase(Ease.OutCubic).OnUpdate(delegate
					{
						if (goods != null)
						{
							goods.transform.position = c.goodsPosition.position;
						}
					})
						.OnComplete(delegate
						{
							if (goods != null)
							{
								goods.startPosition = c.goodsPosition.position;
							}
						});
				}
				else
				{
					c.transform.DOMoveY(newPos.y, 0.3f).SetEase(Ease.OutCubic);
				}
			}
		}
	}
}
