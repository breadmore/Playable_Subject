using UnityEditor;
using UnityEngine;

[CustomEditor(typeof(GameManager))]
public class GameManagerEditor : Editor
{
    public override void OnInspectorGUI()
    {
        base.OnInspectorGUI();

        GameManager manager = (GameManager)target;

        EditorGUILayout.Space(20);
        EditorGUILayout.LabelField("Pyramid Controls", EditorStyles.boldLabel);

        GUILayout.BeginHorizontal();
        if (GUILayout.Button("Generate Pyramid", GUILayout.Height(30)))
        {
            Undo.RecordObject(manager, "Generate Pyramid");
            manager.GeneratePyramid();
            EditorUtility.SetDirty(manager);
        }

        if (GUILayout.Button("Spawn Goods", GUILayout.Height(30)))
        {
            Undo.RecordObject(manager, "Spawn Goods");
            manager.SpawnGoods();
            EditorUtility.SetDirty(manager);
        }

        if (GUILayout.Button("Shuffle Goods", GUILayout.Height(30)))
        {
            Undo.RecordObject(manager, "Shuffle Goods");
            manager.ShuffleGoods();
            EditorUtility.SetDirty(manager);
        }
        GUILayout.EndHorizontal();
    }
}