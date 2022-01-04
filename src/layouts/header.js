export default function createHeader() {
  const top = document.createElement("div");

  top.innerHTML = `
            <div class="header-top">
                <div class="title">
                    <h1>쇼핑하우</h1>
                </div>
                <div class="search">
                    <form>
                        <input type="text" class="search__input" />
                        <button class="search__icon">🔍</button>
                    </form>
                    <ul class="search-top10">
                        <li class="search-top10__item">3. 아디다스 런닝화</li>
                    </ul>
                </div>
            </div>
    
        `;

  const header = document.getElementById("header");
  header.appendChild(top);
}
