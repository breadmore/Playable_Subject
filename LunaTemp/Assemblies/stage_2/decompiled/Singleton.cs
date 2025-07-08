using UnityEngine;

public class Singleton<T> : MonoBehaviour where T : MonoBehaviour
{
	private static T instance;

	private static object lockObj = new object();

	private static bool isShuttingDown = false;

	public static T Instance
	{
		get
		{
			if (isShuttingDown)
			{
				return null;
			}
			lock (lockObj)
			{
				if ((Object)instance == (Object)null)
				{
					instance = (T)Object.FindObjectOfType(typeof(T));
					if ((Object)instance == (Object)null)
					{
						Debug.LogError($"Singleton<{typeof(T)}> instance not found in scene.");
					}
				}
				return instance;
			}
		}
	}

	protected virtual void Awake()
	{
		if ((Object)instance == (Object)null)
		{
			instance = this as T;
		}
		else if (instance != this)
		{
			Object.Destroy(base.gameObject);
		}
	}

	private void OnApplicationQuit()
	{
		isShuttingDown = true;
	}

	private void OnDestroy()
	{
		if (instance == this)
		{
			isShuttingDown = true;
		}
	}
}
