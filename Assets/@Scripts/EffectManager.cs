using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class EffectManager : Singleton<EffectManager>
{
    [Header("Audio Clips")]
    public AudioClip clickClip;
    public AudioClip bgmClip;

    public AudioSource sfxSource;  //효과음용
    public AudioSource bgmSource;  //배경음용
    private bool hasStarted = false;

    [Header("References")]
    public ParticleSystem popEffectPrefab;
    public Image goodImage;

    [Header("Fade Settings")]
    public float fadeInDuration = 0.25f;
    public float visibleDuration = 0.5f;
    public float fadeOutDuration = 0.25f;

    [Header("Pool Settings")]
    public int poolSize = 9;

    private Queue<ParticleSystem> popEffectPool = new Queue<ParticleSystem>();

    public Transform effectsPoolParent;

    protected override void Awake()
    {
        base.Awake();

        bgmSource.loop = true;
        bgmSource.playOnAwake = false;
        sfxSource.playOnAwake = false;

        //팝 이펙트 풀 초기화
        for (int i = 0; i < poolSize; i++)
        {
            var psInstance = Instantiate(popEffectPrefab, effectsPoolParent);
            psInstance.gameObject.SetActive(false);
            popEffectPool.Enqueue(psInstance);
        }

        if (goodImage != null)
        {
            var c = goodImage.color;
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
        yield return img.DOFade(1f, fadeInDuration).WaitForCompletion();

        yield return new WaitForSeconds(visibleDuration);

        yield return img.DOFade(0f, fadeOutDuration).WaitForCompletion();

        img.gameObject.SetActive(false);
    }
}
