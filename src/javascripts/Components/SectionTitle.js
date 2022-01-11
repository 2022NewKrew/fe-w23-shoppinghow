import Component from '../Core/Component'
import styles from '../../scss/ComponentStyles/SectionTitle.module.scss'

export default class SectionTitle extends Component {

    constructor(title) {
        super(`
            <div class="${ styles.titleBox }">
                <div class="${ styles.title }">${title}</div>
            </div>
        `)
    }

}