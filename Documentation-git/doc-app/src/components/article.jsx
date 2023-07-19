import React from "react";
function Article() {
    return (
      <div className="article">
        <div className="article-code">
          <pre>
            <code className="language-js">                

            </code>
          </pre>
        </div>    
            <p>Что такое Promise? Promise – это специальный объект, который содержит своё состояние. Вначале pending («ожидание»), затем – одно из: fulfilled («выполнено успешно») или rejected («выполнено с ошибкой»).</p>
            <p>На promise можно навешивать колбэки двух типов: onFulfilled – срабатывают, когда promise в состоянии «выполнен успешно». onRejected – срабатывают, когда promise в состоянии «выполнен с ошибкой».</p>
      </div>
      
    );
  }
  
  export default Article;