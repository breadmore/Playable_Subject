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
        fixedZ = transform.position.z;
        goodsLayerMask = 1 << LayerMask.NameToLayer("Goods");
        startPosition = transform.position;
    }

    private void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            Ray ray = cam.ScreenPointToRay(Input.mousePosition);
            if (Physics.Raycast(ray, out RaycastHit hit, 100f, goodsLayerMask))
            {
                if (hit.collider.gameObject == gameObject)
                {
                    UIManager.Instance.NotifyGoodsClicked();
                    isDragging = true;
                    offset = transform.position - hit.point;

                    Vector3 newPos = transform.position;
                    newPos.z = fixedZ + draggingZOffset;
                    transform.position = newPos;
                }
            }
        }

        if (isDragging && Input.GetMouseButton(0))
        {
            float screenZ = cam.WorldToScreenPoint(transform.position).z;
            Vector3 mousePos = Input.mousePosition;
            mousePos.z = screenZ;
            Vector3 worldPos = cam.ScreenToWorldPoint(mousePos);
            worldPos += offset;

            worldPos.z = fixedZ + draggingZOffset;
            transform.position = worldPos;
        }

        if (Input.GetMouseButtonUp(0))
        {
            isDragging = false;

            Vector3 newPos = transform.position;
            newPos.z = fixedZ;
            transform.position = newPos;

            TrySnapToCaseOrReturn();
        }
    }

    private void TrySnapToCaseOrReturn()
    {
        Case[] allCases = FindObjectsOfType<Case>();
        Case nearestCase = null;
        float minDist = float.MaxValue;

        foreach (Case c in allCases)
        {
            if (c == null || c.goodsPosition == null) continue;

            float dist = Vector3.Distance(transform.position, c.goodsPosition.position);
            if (dist < minDist && dist < 1.0f)
            {
                minDist = dist;
                nearestCase = c;
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
            transform.position = nearestCase.goodsPosition.position;
            startPosition = transform.position;

            //클리어 체크
            GameManager.Instance.CheckLayerClear(currentCase.currentLayer);
        }
        else
        {
            transform.position = startPosition;
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