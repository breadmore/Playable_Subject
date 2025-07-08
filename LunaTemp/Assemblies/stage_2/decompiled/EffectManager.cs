using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class EffectManager : Singleton<EffectManager>
{
	[Header("Audio Clips")]
	public AudioClip clickClip;

	public AudioClip bgmClip;

	public AudioSource sfxSource;

	public AudioSource bgmSource;

	private bool hasStarted = false;

	[Header("References")]
	public ParticleSystem popEffectPrefab;

	public Image goodImage;

	[Header("Fade Settings")]
	public float fadeInDuration = 0.15f;

	public float visibleDuration = 0.3f;

	public float fadeOutDuration = 0.15f;

	[Header("Pool Settings")]
	public int poolSize = 9;

	private Queue<ParticleSystem> popEffectPool = new Queue<ParticleSystem>();

	public Transform effectsPoolParent;

	private void Start()
	{
		bgmSource.loop = true;
		bgmSource.playOnAwake = false;
		sfxSource.playOnAwake = false;
		for (int i = 0; i < poolSize; i++)
		{
			ParticleSystem psInstance = Object.Instantiate(popEffectPrefab, effectsPoolParent);
			psInstance.gameObject.SetActive(false);
			popEffectPool.Enqueue(psInstance);
		}
		if (goodImage != null)
		{
			Color c = goodImage.color;
			c.a = 0f;
			goodImage.color = c;
		}
	}

	private void Update()
	{
		if (!hasStarted && Input.GetMouseButtonDown(0))
		{
			PlayEffectsOnce();
		}
	}

	private void PlayEffectsOnce()
	{
		if (clickClip != null)
		{
			sfxSource.PlayOneShot(clickClip);
		}
		if (bgmClip != null)
		{
			bgmSource.clip = bgmClip;
			bgmSource.Play();
		}
		hasStarted = true;
	}

	public void PopClearEffect(Vector3 effectPosition)
	{
		if (popEffectPool.Count > 0)
		{
			Vector2 screenPos = Camera.main.WorldToScreenPoint(effectPosition);
			ParticleSystem popEffect = popEffectPool.Dequeue();
			popEffect.transform.position = screenPos;
			popEffect.gameObject.SetActive(true);
			popEffect.Play();
			StartCoroutine(ReturnPopEffectToPoolAfterPlaying(popEffect));
		}
	}

	public void ShowGoodImage(Vector3 effectPosition)
	{
		if (goodImage != null)
		{
			Vector2 screenPos = Camera.main.WorldToScreenPoint(effectPosition);
			goodImage.transform.position = screenPos;
			goodImage.gameObject.SetActive(true);
			StartCoroutine(FadeInOutGoodImage(goodImage));
		}
	}

	private IEnumerator ReturnPopEffectToPoolAfterPlaying(ParticleSystem ps)
	{
		yield return new WaitForSeconds(1f);
		ps.gameObject.SetActive(false);
		popEffectPool.Enqueue(ps);
	}

	private IEnumerator FadeInOutGoodImage(Image img)
	{
		yield return StartCoroutine(FadeImageAlpha(img, 0f, 1f, fadeInDuration));
		yield return new WaitForSeconds(visibleDuration);
		yield return StartCoroutine(FadeImageAlpha(img, 1f, 0f, fadeOutDuration));
		img.gameObject.SetActive(false);
	}

	private IEnumerator FadeImageAlpha(Image img, float fromAlpha, float toAlpha, float duration)
	{
		float time = 0f;
		Color color = img.color;
		while (time < duration)
		{
			time += Time.deltaTime;
			float t = time / duration;
			float alpha = Mathf.Lerp(fromAlpha, toAlpha, t);
			img.color = new Color(color.r, color.g, color.b, alpha);
			yield return null;
		}
		img.color = new Color(color.r, color.g, color.b, toAlpha);
	}
}
