using UnityEngine;

public class Case : MonoBehaviour
{
    public Transform goodsPosition;
    public Goods currentGoods;
    public int currentLayer;

    public void SetThisGoods(Goods goods)
    {
        if (IsEmpty() && goods != null)
        {
            currentGoods = goods;
            goods.transform.position = goodsPosition.position;
            goods.SetCurrentCase(this);
        }
    }

    public void RemoveGoods()
    {
        if (currentGoods != null)
        {
            currentGoods.SetCurrentCase(null);
            currentGoods = null;
        }
    }

    public Goods GetCurrentGoods()
    {
        return currentGoods;
    }

    public bool IsEmpty()
    {
        return currentGoods == null;
    }

    public bool HasMatchingGoods()
    {
        //최상층은 항상 false 반환
        if (currentLayer >= GameManager.Instance.pyramidLayers - 1)
            return false;

        return !IsEmpty() && currentGoods.originLayer == currentLayer;
    }
}