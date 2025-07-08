using System.Collections;
using TMPro;
using UnityEngine;
using DG.Tweening;

public class UIManager : Singleton<UIManager>
{
    public GameObject messageBack;
    public TextMeshProUGUI message;

    private bool hasMessageHidden = false;
    private Tween floatingTween;
    private Coroutine reappearCoroutine;

    private float originalMessageY;

    private void Start()
    {
        RectTransform rect = message.GetComponent<RectTransform>();
        originalMessageY = rect.anchoredPosition.y;
        StartMessageFloating();
    }

    public void HideMessageIfShown()
    {
        if (!hasMessageHidden && message != null)
        {
            if (floatingTween != null && floatingTween.IsActive())
                floatingTween.Kill();

            messageBack.SetActive(false);
            hasMessageHidden = true;
        }
    }

    private void StartMessageFloating()
    {
        if (message == null) return;

        RectTransform rect = message.GetComponent<RectTransform>();
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

        if (hasMessageHidden && message != null)
        {
            messageBack.SetActive(true);
            hasMessageHidden = false;
            StartMessageFloating();
        }
    }
}
