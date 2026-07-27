import { useEffect, useRef } from "react";
import { animate, scrambleText } from "animejs";

// ResultCard：展示分析结果的面板组件。
// 说明：组件在挂载时会执行入场动画（淡入 + 上移）并对显示的情感分数做一次滚动/扰动效果。
export default function ResultCard() {
  // cardRef：指向最外层的 article 元素，用于对整个卡片做动画。
  const cardRef = useRef(null);
  // scoreRef：指向显示情感分数的 <strong> 元素，用于数字滚动效果。
  const scoreRef = useRef(null);

  useEffect(() => {
    // 对卡片做入场动画：
    // - opacity: [0,1] 从透明到不透明
    // - translateY: [24,0] 从下方 24px 移动到原位
    // - duration: 700 表示动画持续 700 毫秒（0.7 秒）
    // - ease: "outBack" 使用带回弹的缓动效果
    animate(cardRef.current, {
      opacity: [0, 1],
      translateY: [24, 0],
      duration: 700,
      ease: "outBack",
    });

    // 对情感分数做一个字符扰动/滚动效果，提升视觉反馈。
    // scrambleText 会生成一个逐步变化的 innerHTML（类似数字滚动），
    // duration: 1500 表示该效果持续 1.5 秒。
    animate(scoreRef.current, {
      innerHTML: scrambleText({ chars: "0-9" }),
      duration: 1500,
    });
  }, []); // 空依赖数组 => 只在挂载时运行一次

  return (
    <article ref={cardRef} className="panel panel-half lab-panel result-panel card">
      <div className="panel-heading">
        <p className="section-kicker">结果区</p>
        <h3>分析结果</h3>
      </div>
      <div className="result-stack">
        <div className="result-item">
          <span>原文</span>
          <p>今天的风很轻，适合把脑海里的想法慢慢写下来。</p>
        </div>
        <div className="result-item">
          <span>拼音</span>
          <p>jīn tiān de fēng hěn qīng …</p>
        </div>
        <div className="result-grid">
          <div className="result-badge">
            <span>情感分数</span>
            {/* data-score 用于标识这是分数显示位；ref 用于动画控制 */}
            <strong data-score ref={scoreRef}>0.86</strong>
          </div>
          <div className="result-badge">
            <span>情感判断</span>
            <strong>偏积极</strong>
          </div>
        </div>
      </div>
    </article>
  );
}
