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
        Transform textTransform = goodText.transform;
        originalMessageY = textTransform.position.y;
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

        Transform textTransform = goodText.transform;

        // Kill any existing tween
        if (floatingTween != null && floatingTween.IsActive())
            floatingTween.Kill();

        // Reset to original position
        textTransform.position = new Vector3(
            textTransform.position.x,
            originalMessageY,
            textTransform.position.z
        );

        // Floating using DOMoveY (world position)
        floatingTween = textTransform.DOMoveY(originalMessageY + 10f, 1f)
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
