using System.Collections;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using DG.Tweening;

public class LoadingSceneController : MonoBehaviour
{
    [Header("UI References")]
    public GameObject loadingPanel;
    public Slider progressBar;

    private void Start()
    {
        loadingPanel.SetActive(true);
        progressBar.value = 0f;
        StartCoroutine(InitializeGameFlow());
    }

    private IEnumerator InitializeGameFlow()
    {
        yield return null;

        yield return AnimateStep(0.7f);

        yield return StartCoroutine(GameManager.Instance.FullInitializeRoutine());

        yield return AnimateStep(1.0f);
        yield return new WaitForSeconds(0.1f);

        loadingPanel.SetActive(false);
    }

    private IEnumerator AnimateStep(float progress)
    {
        progressBar.DOValue(progress, 0.4f).SetEase(Ease.InOutSine);

        yield return new WaitForSeconds(0.15f);
    }
}
