using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "CaseDatabase", menuName = "Game/CaseDatabase")]
public class CaseDatabase : ScriptableObject
{
	public List<Material> caseMaterialList;

	public Material GetMaterialByIndex(int index)
	{
		if (index < 0 || index >= caseMaterialList.Count)
		{
			return null;
		}
		return caseMaterialList[index];
	}
}
