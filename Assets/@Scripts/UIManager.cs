using System.Collections;
using TMPro;
using UnityEngine;
using DG.Tweening;

public class UIManager : Singleton<UIManager>
{
    public GameObject textBack;
    public TextMeshProUGUI goodText;

    private bool hasMessageHidden = false;
    private Tween floatingTween;
    private Coroutine reappearCoroutine;

    private float originalMessageY;

    private void Start()
    {
        RectTransform rect = goodText.GetComponent<RectTransform>();
        originalMessageY = rect.anchoredPosition.y;
        StartMessageFloating();
    }

    public void HideMessageIfShown()
    {
        if (!hasMessageHidden && goodText != null)
        {
            if (floatingTween != null && floatingTween.IsActive())
                floatingTween.Kill();

            textBack.SetActive(false);
            hasMessageHidden = true;
        }
    }

    private void StartMessageFloating()
    {
        if (goodText == null) return;

        RectTransform rect = goodText.GetComponent<RectTransform>();
        rect.anchoredPosition = new Vector2(rect.anchoredPosition.x, originalMessageY); //항상 초기값으로 복구

        floatingTween = rect.DOAnchorPosY(originalMessageY + 20f, 1f)
            .SetLoops(-1, LoopType.Yoyo)
            .SetEase(Ease.InOutSine);
    }

    public void NotifyGoodsClicked()
    {
        HideMessageIfShown();

        if (reappearCoroutine != null)
            StopCoroutine(reappearCoroutine);

        reappearCoroutine = StartCoroutine(ReappearMessageAfterDelay(3f));
    }

    private IEnumerator ReappearMessageAfterDelay(float delay)
    {
        yield return new WaitForSeconds(delay);

        if (hasMessageHidden && goodText != null)
        {
            textBack.SetActive(true);
            hasMessageHidden = false;
            StartMessageFloating();
        }
    }
}
