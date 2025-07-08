using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "GoodsDatabase", menuName = "Game/GoodsDatabase")]
public class GoodsDatabase : ScriptableObject
{
	public List<Material> goodsMaterialList;

	public Material GetMaterialByIndex(int index)
	{
		if (index < 0 || index >= goodsMaterialList.Count)
		{
			return null;
		}
		return goodsMaterialList[index];
	}
}
