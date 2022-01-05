import Component from '../Component'
import styles from '../../scss/section-title.scss'

export default class SectionTitle extends Component {

    constructor(title) {
        super(`
            <div class="${ styles.titleBox }">
                <div class="${ styles.title }">${title}</div>
            </div>
        `)
    }

}