import { createDom } from '@utils/createDom';
import { goodsItem } from '@components/goodsStall/goodsItem';

export const goodsList = (type, goodsData) => {
    const render = () => {
        const target = createDom('div', { className: 'goods-stall-list' });
        goodsData.forEach((goods) =>
            target.appendChild(
                goodsItem({
                    type,
                    goods,
                })
            )
        );

        return target;
    };

    return render();
};
