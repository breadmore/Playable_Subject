using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using UnityEditor;
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
    private List<Goods> spawnedGoods = new();
    private Dictionary<int, List<Case>> layerCases = new();

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
            return;
        }
        ShuffleGoodsAcrossLayers();
    }

    private void ClearExistingPyramid()
    {
        if (cases != null)
        {
            foreach (var c in cases)
            {
                if (c != null && c.gameObject != null)
                {
                    Destroy(c.gameObject);
                }
            }
        }
        cases = null;
        layerCases.Clear();
        spawnedGoods.Clear();
    }

    private void ClearExistingGoods()
    {
        foreach (var goods in spawnedGoods)
        {
            if (goods != null && goods.gameObject != null)
            {
                Destroy(goods.gameObject);
            }
        }
        spawnedGoods.Clear();

        if (cases != null)
        {
            foreach (var c in cases)
            {
                if (c != null) c.RemoveGoods();
            }
        }
    }

    private void GeneratePyramidCases()
    {
        int totalSlots = (pyramidLayers * (pyramidLayers + 1)) / 2;
        cases = new Case[totalSlots];
        layerCases = new Dictionary<int, List<Case>>();

        int index = 0;
        for (int layer = 0; layer < pyramidLayers; layer++)
        {
            float y = startPosition.y + layer * spacingY;
            int slotCount = pyramidLayers - layer;
            float startX = startPosition.x - (slotCount - 1) * spacingX * 0.5f;

            int colorIndex = Mathf.Clamp(layer, 0, caseDatabase.caseMaterialList.Count - 1);
            layerCases[layer] = new List<Case>();

            for (int col = 0; col < slotCount; col++)
            {
                Vector3 pos = new Vector3(startX + col * spacingX, y, startPosition.z);
                GameObject slot = Instantiate(casePrefab, pos, Quaternion.identity);

                Case caseComp = slot.GetComponent<Case>();
                caseComp.currentLayer = layer;

                Renderer rend = slot.GetComponent<Renderer>();
                if (rend != null)
                {
                    Material mat = caseDatabase.GetMaterialByIndex(colorIndex);
                    if (mat != null) rend.material = mat;
                }

                cases[index] = caseComp;
                layerCases[layer].Add(caseComp);
                index++;
            }
        }
    }

    private void SpawnAndPlaceGoods()
    {
        int totalGoods = cases.Length - 1; //맨 위 1칸 제외

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

                GameObject goodsGO = Instantiate(goodsPrefab, Vector3.zero, Quaternion.identity);
                Goods goods = goodsGO.GetComponent<Goods>();
                goods.originLayer = layer;

                Renderer rend = goodsGO.GetComponent<Renderer>();
                if (rend != null) rend.material = mat;

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

        //셔플할 슬롯 선택
        List<int> shuffleSlots = new List<int>();
        foreach (var pair in layerToIndices)
        {
            if (pair.Value.Count <= 1) continue; //1개 이하면 셔플 필요 없음

            //해당 층에서 최소 1개 이상 선택
            int shuffleCount = Mathf.Max(1, Random.Range(1, pair.Value.Count));

            List<int> shuffled = new List<int>(pair.Value);
            for (int i = 0; i < shuffled.Count; i++)
            {
                int rand = Random.Range(i, shuffled.Count);
                (shuffled[i], shuffled[rand]) = (shuffled[rand], shuffled[i]);
            }
            for (int i = 0; i < shuffleCount; i++)
            {
                shuffleSlots.Add(shuffled[i]);
            }
        }

        //셔플 실행
        if (shuffleSlots.Count >= 2)
        {
            for (int i = 0; i < shuffleSlots.Count; i++)
            {
                int rand = Random.Range(i, shuffleSlots.Count);
                (shuffleSlots[i], shuffleSlots[rand]) = (shuffleSlots[rand], shuffleSlots[i]);
            }
            int count = shuffleSlots.Count % 2 == 0 ? shuffleSlots.Count : shuffleSlots.Count - 1;

            for (int i = 0; i < count; i += 2)
            {
                int fromIndex = shuffleSlots[i];
                int toIndex = shuffleSlots[i + 1];

                if (fromIndex == toIndex ||
                    fromIndex >= cases.Length ||
                    toIndex >= cases.Length ||
                    cases[fromIndex] == null ||
                    cases[toIndex] == null)
                    continue;

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

        for (int l = 0; l < pyramidLayers; l++)
        {
            int slotCount = pyramidLayers - l;

            if (l == layer)
            {
                for (int i = 0; i < slotCount; i++)
                    result.Add(count + i);
                break;
            }
            count += slotCount;
        }
        return result;
    }

    public void CheckLayerClear(int layer)
    {
        //최상층은 클리어 불가능
        if (layer >= pyramidLayers - 1) return;
        if (!layerCases.ContainsKey(layer)) return;

        bool allMatched = true;
        foreach (var c in layerCases[layer])
        {
            if (c == null || !c.HasMatchingGoods())
            {
                allMatched = false;
                break;
            }
        }

        if (allMatched)
        {
            Vector3 worldPos = layerCases[layer][0].transform.position;
            Vector3 effectPos = new Vector3(0, worldPos.y, 0);

            EffectManager.Instance.ShowGoodImage(effectPos);
            ClearLayerSimple(layer);
        }

    }

    private void ClearLayerSimple(int layer)
    {
        if (!layerCases.ContainsKey(layer)) return;

        List<Case> casesToRemove = new List<Case>(layerCases[layer]);
        layerCases.Remove(layer);

        foreach (Case c in casesToRemove)
        {
            if (c == null) continue;

            // 굿즈 제거
            if (!c.IsEmpty())
            {
                Goods goods = c.GetCurrentGoods();
                if (goods != null)
                {
                    spawnedGoods.Remove(goods);
                    Destroy(goods.gameObject);
                }
            }

            Vector3 effectPos = c.transform.position;
            Destroy(c.gameObject);

            for (int i = 0; i < cases.Length; i++)
            {
                if (cases[i] == c)
                {
                    cases[i] = null;
                    break;
                }
            }

            EffectManager.Instance.PopClearEffect(effectPos);
        }

        MoveLayersDown(layer + 1);
    }

    private void MoveLayersDown(int startLayer)
    {
        for (int layer = startLayer; layer < pyramidLayers; layer++)
        {
            if (!layerCases.TryGetValue(layer, out var caseList)) continue;

            foreach (var c in caseList.ToArray())
            {
                if (c == null || !c.gameObject) continue;

                Vector3 newPos = c.transform.position;
                newPos.y -= spacingY;

                if (!c.IsEmpty() && c.GetCurrentGoods() != null)
                {
                    Goods goods = c.GetCurrentGoods();
                    goods.transform.SetParent(null);

                    c.transform.DOMoveY(newPos.y, 0.3f)
                        .SetEase(Ease.OutCubic)
                        .OnUpdate(() =>
                        {
                            if (goods != null)
                                goods.transform.position = c.goodsPosition.position;
                        })
                        .OnComplete(() =>
                        {
                            if (goods != null)
                                goods.startPosition = c.goodsPosition.position;
                        });
                }
                else // 굿즈가 없는 경우
                {
                    c.transform.DOMoveY(newPos.y, 0.3f)
                        .SetEase(Ease.OutCubic);

                }
            }
        }
    }
}