import Component from "../../core/Component";

//TODO 인기검색어리스트 추가기능 작업예정
export default class RollKeyword extends Component {
  template() {
    const searchKeywordGroup = this.$props.searchKeywordGroup

    return `
        ${
            searchKeywordGroup.map((keyword,index)=>{
                return `<li>
                        <span class="num_rank">${index + 1}</span>${keyword.name}
                    </li>`
            }).join(' ')
        }
        ${
            `<li>
                        <span class="num_rank">${1}</span>${searchKeywordGroup[0].name}
                    </li>`
        }
    `;
  }
}
