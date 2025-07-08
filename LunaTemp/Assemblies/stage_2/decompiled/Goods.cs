using UnityEngine;

public class Goods : MonoBehaviour
{
	private Camera cam;

	private bool isDragging = false;

	private float fixedZ;

	private Vector3 offset;

	private int goodsLayerMask;

	public Vector3 startPosition;

	public Case currentCase;

	public int originLayer;

	private float draggingZOffset = -0.2f;

	private void Start()
	{
		cam = Camera.main;
		fixedZ = base.transform.position.z;
		goodsLayerMask = 1 << LayerMask.NameToLayer("Goods");
		startPosition = base.transform.position;
	}

	private void Update()
	{
		if (Input.GetMouseButtonDown(0))
		{
			Ray ray = cam.ScreenPointToRay(Input.mousePosition);
			if (Physics.Raycast(ray, out var hit, 100f, goodsLayerMask) && hit.collider.gameObject == base.gameObject)
			{
				Singleton<UIManager>.Instance.NotifyGoodsClicked();
				isDragging = true;
				offset = base.transform.position - hit.point;
				Vector3 newPos2 = base.transform.position;
				newPos2.z = fixedZ + draggingZOffset;
				base.transform.position = newPos2;
			}
		}
		if (isDragging && Input.GetMouseButton(0))
		{
			float screenZ = cam.WorldToScreenPoint(base.transform.position).z;
			Vector3 mousePos = Input.mousePosition;
			mousePos.z = screenZ;
			Vector3 worldPos = cam.ScreenToWorldPoint(mousePos);
			worldPos += offset;
			worldPos.z = fixedZ + draggingZOffset;
			base.transform.position = worldPos;
		}
		if (Input.GetMouseButtonUp(0))
		{
			isDragging = false;
			Vector3 newPos = base.transform.position;
			newPos.z = fixedZ;
			base.transform.position = newPos;
			TrySnapToCaseOrReturn();
		}
	}

	private void TrySnapToCaseOrReturn()
	{
		Case[] allCases = Object.FindObjectsOfType<Case>();
		Case nearestCase = null;
		float minDist = float.MaxValue;
		Case[] array = allCases;
		foreach (Case c in array)
		{
			if (!(c == null) && !(c.goodsPosition == null))
			{
				float dist = Vector3.Distance(base.transform.position, c.goodsPosition.position);
				if (dist < minDist && dist < 1f)
				{
					minDist = dist;
					nearestCase = c;
				}
			}
		}
		if (nearestCase != null && nearestCase.IsEmpty())
		{
			Case previousCase = currentCase;
			if (previousCase != null)
			{
				previousCase.RemoveGoods();
			}
			nearestCase.SetThisGoods(this);
			currentCase = nearestCase;
			base.transform.position = nearestCase.goodsPosition.position;
			startPosition = base.transform.position;
			Singleton<GameManager>.Instance.CheckLayerClear(currentCase.currentLayer);
		}
		else
		{
			base.transform.position = startPosition;
		}
	}

	public void SetCurrentCase(Case c)
	{
		currentCase = c;
		if (currentCase != null)
		{
			startPosition = currentCase.goodsPosition.position;
		}
	}

	public Case GetCurrentCase()
	{
		return currentCase;
	}
}
