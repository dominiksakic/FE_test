export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="main-button-container">
        <button>Search</button>
        <button>Create</button>
      </div>
      <div className="sidebar-prompt-container">
        <h2>よく使うプロンプト</h2>
        <nav>
          <ul>
            <li>Email</li>
            <li>Estimate</li>
            <li>Why?</li>
            <li>Example</li>
            <li>More Examples</li>
            <li>もっと見る</li>
          </ul>
        </nav>
      </div>
      <div className="sidebar-chat-container">
        <div className="time-container">
          <h2>今日のチャット</h2>
          <nav>
            <ul>
              <li>Email</li>
              <li>Estimate</li>
            </ul>
          </nav>
        </div>
        <div className="time-container">
          <h2>昨日のチャット</h2>
          <nav>
            <ul>
              <li>Email</li>
              <li>Estimate</li>
            </ul>
          </nav>
        </div>
        <div className="time-container">
          <h2>今月のチャット</h2>
          <nav>
            <ul>
              <li>Email</li>
              <li>Estimate</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
