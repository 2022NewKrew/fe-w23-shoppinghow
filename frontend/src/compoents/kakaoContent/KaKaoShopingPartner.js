import Component from "../../core/Component";

//TODO: cMain작업예정(상품 리스트)
export default class KaKaoShopingPartner extends Component {
  template() {
    return `<h3 class="tit_home">쇼핑하우 파트너</h3>
    <div class="section_etc">
        <div class="#partner_main cont_partner">
            <div class="cate_partner"><strong class="tit_mall">오픈마켓</strong>
                <ul class="list_mall">
                    <li class="_GI_" data-gg="{s:gmarket}"><a
                            href="/go.daum?skey=khHIuvJRdeuwbMZe3a7apMkP8WtSSMBu7Uj_A4HiCyhMpMdzTWk6MsUJ5MD75rJQlXKmuJJP3m5Kzmok4OO35TtHfnb_4x3bkl86tdJXz2SC8HnuOtlBQ83Rbj_bhmAykEDJJ&amp;val=mng00bybxaZHJAX2yN7TXms5382BKgVfgSwPF_3sdysYTVYaohHnqE8GUFokN85LDy339GeiFTm7or1g0"
                            target="_blank" class="link_mall _GC_">G마켓</a></li>
                    <li class="_GI_" data-gg="{s:auction}"><a
                            href="/go.daum?skey=EYGZdiB1jAnluOHmO.usBGoUNuCDk72YLlmoA7_2L8IXrN9Xe1P9caZHFWJbwABB9J8lZRZyZ7iXLAtqK2VHdaEuiB6E6BrEjwmIDVu5PPRhTH47c3IRYRMmakrjJU27251gR&amp;val=ngA007MveBnjhzEo3CrHzJWlqY1To4tRvEy3shcxUEkRGsxbvA-wz7HRnCzS6WHXWJaaGrK_Ikd_h9lk0"
                            target="_blank" class="link_mall _GC_">옥션</a></li>
                    <li class="_GI_" data-gg="{s:11st}"><a
                            href="/go.daum?skey=5aiv7QKXcA_ltMoVshQx9lMZlO6TRCfUFJKc-q96APLPA-pn_mobKzhVbJ_v9VxjURszZTIrz6LBVmUUJbXeibzV.nYiolyaWMKjnT.PmMznZ7dgFUqIfBaONLJItwEU57AW1&amp;val=u.Q007EvIbImeYpN67koWcpvZCh84TAgOIcYorj1j.N5GTtbZscTCDvuC3B3Fc_--wlg9fcI5zsIC7bA0"
                            target="_blank" class="link_mall _GC_">11번가</a></li>
                    <li class="_GI_" data-gg="{s:interpark}"><a
                            href="/go.daum?skey=k1N50yYMi9jHTsvGmVYn9_7lfIzlpShtndJ4RFwSWMJVBwKGhHrQmUnw9UuZklr76cJ.oiHrTseYA.X1mR4ahSBdmnMWpKl8SyBQiulyzUU6Jzf2sy.afxqZEOy344QJgcNTejtLRuZp5R3JvvWmvrDJFHg00&amp;val=4Fg00EZ3wp5LNk9P6HLFrF1wtIlDKIw2_jNpGSlDd_ryf1w1TV.3_uNv-4arjDb2VapjQQirZcv-g.FA0"
                            target="_blank" class="link_mall _GC_">인터파크</a></li>
                    <li class="_GI_" data-gg="{s:lotte}"><a
                            href="/go.daum?skey=vmsE94EoNxFxKoOByVHeZskLWOqCMvRgVBgGfK5BEF_cNK3_hSUBsW.8eU4_Rd6R6m9F7Rm-UfUZcwZjA.Od-A56KJv5j9zYB64t5jb4FhpoSnyQ4v.M6xZeK7cpjpIVrHp6f&amp;val=71Q00bheJ3dMj_7Aq4Pi9u8ssPzEhcgPo-95E7P-7bY9jljoy3MWYq4rPi6Cbw.UUnwUhh-qPbkxtv.o0"
                            target="_blank" class="link_mall _GC_">롯데온</a></li>
                    <li class="_GI_" data-gg="{s:qoo10}"><a
                            href="/go.daum?skey=MOSnNkQ8GsMP9xTxbjDJoRNwC8gPxFHyzO8_bgXCR32NR86of6hkiAqtA2Rtd.jGGUaE-GXauH1W5BWvrPq4zusrFHX5RnvXSDXemWBcuzj7--a3yLzF9Pt_6eJ9Is7XdjN.h&amp;val=_7g00BxzO.lzN1uGd-mIefS27YSFjCsxjipve.fuwJbwCklv6_A991N.iCvvk_ZsHxHyrvbi3A.mS38U0"
                            target="_blank" class="link_mall _GC_">qoo10</a></li>
                    <li class="_GI_" data-gg="{s:coupang}"><a
                            href="/go.daum?skey=Qq.q3RMLSUu.VlMtWCv-yD4MG9E6BYG_V5GvQ6wTXyKMcGciDUIWQubYfVRS92X3Vu4zNIWH7qGROhc.mh1Emn67U2H9vwgRXnwu5UavmowqPpIgcaR_fycALWzj3FVRS6kNT&amp;val=Fig00tRFD6f.x.mV3brNqw5UXhGVjAN8ZOASfKJtTFa2yLDEcDj2Ka8-dbEvM43HcHo-_pq9gFLGhiQI0"
                            target="_blank" class="link_mall _GC_">쿠팡</a></li>
                    <li class="_GI_" data-gg="{s:ebayshop1}"><a
                            href="/go.daum?skey=DUWw04wIOTrgEprjGSTdCPzcQ5qSXpSQ.P_TRq3nYR.MOOUAQ.UHR7y6EvXNysEIwEpIVGQ1o6.hJ5z9.Tjrndzs-IB_Ar2iQa3DO7mzrMzlq3MGZzfLrnrwxarkn4Tn17H64DZtGsVmm741.Hwzhy-5G-w00&amp;val=HGQ00qc6GtUwg82ExrGBJTYrU2ZwVNCc66HZ6yFvKTjcCAz6lh-5DW_WBN3qfaj.JCecoYJzkIaV1EsY0"
                            target="_blank" class="link_mall _GC_">이베이쇼핑</a></li>
                </ul>
            </div>
            <div class="cate_partner"><strong class="tit_mall">백화점</strong>
                <ul class="list_mall">
                    <li class="_GI_" data-gg="{s:samsungmall}"><a
                            href="/go.daum?skey=xP3g0qHgYI3ioVtubnP8YMmHVjDkYhULaxSdLWntmEDOsyxke1E9rRW8.tqTAp1pq7-o4gAxByFLbCFkLVwgfjE5SEJdOo_8Y2XdccNgNOUWd9jUUptZdTbu4mAXVhsWezUhIa6oh-AD3pU7jb1xWz8qqgg00&amp;val=mng00bybxaZHJAX2yN7TXms5382BKgVfgSwPF_3sdysYTVYaohHnqE8GUFokN85LDy339GeiFTm7or1g0"
                            target="_blank" class="link_mall _GC_">AKmall</a></li>
                    <li class="_GI_" data-gg="{s:ellotte}"><a
                            href="/go.daum?skey=BC.7EdsELN8gzC64MP1uottf9Rlu_e3Tj2OVbA6g_Nb2EoCosmDuFUbNwALvGyDnWpQblmuZLool677YXFPKYm1381Ox3CxZa_U_1Htcb958Ckd2tIc84kGWF_Y4mzgwmgaeN&amp;val=ngA007MveBnjhzEo3CrHzJWlqY1To4tRvEy3shcxUEkRGsxbvA-wz7HRnCzS6WHXWJaaGrK_Ikd_h9lk0"
                            target="_blank" class="link_mall _GC_">롯데백화점</a></li>
                    <li class="_GI_" data-gg="{s:galleria}"><a
                            href="/go.daum?skey=zoZI0oy98.BOLavmnN2GkExP1akJSeSnDvbQQ4BGwv96zEOjTRrLuN2tAQmVC.y8qtnpfhuYaF.Q7lIFCyUxhME7nWwytPjCSEM2D6QnVwJFne6Udkn.ZVWBeWWTRVK9RxkfDguo.9t_M.tlUZfVj6BrOJw00&amp;val=u.Q007EvIbImeYpN67koWcpvZCh84TAgOIcYorj1j.N5GTtbZscTCDvuC3B3Fc_--wlg9fcI5zsIC7bA0"
                            target="_blank" class="link_mall _GC_">갤러리아몰</a></li>
                    <li class="_GI_" data-gg="{s:ssg14}"><a
                            href="/go.daum?skey=aSfgwffIzNrKLCYNylzv_odrZhIGPy72AyEJANymdSBGEvF6BUDF7Hvt7jlU1XDJ.79LNJE3HEhM9hI27YMKr-SC5PVHz1A5LiYs4aMz7Kmpj7TjfIvgvYQfABBuIyUlcZqKE&amp;val=4Fg00EZ3wp5LNk9P6HLFrF1wtIlDKIw2_jNpGSlDd_ryf1w1TV.3_uNv-4arjDb2VapjQQirZcv-g.FA0"
                            target="_blank" class="link_mall _GC_">SSG</a></li>
                    <li class="_GI_" data-gg="{s:smdutyfree}"><a
                            href="/go.daum?skey=mqRk0gPD1oxAsY52RWcYs46V4Z2jkJhGcwP-gUzBYHVkdl2HOOS573iRE3xOyO42mwe781qvYQ_ZKSFk5HJB45Q8GSbwECazcS-8y4oYGyK9c5kb8HjyQoqjYIDl97tj6DRBEsQ9LSKUNXylNgyqga7rAOQ00&amp;val=71Q00bheJ3dMj_7Aq4Pi9u8ssPzEhcgPo-95E7P-7bY9jljoy3MWYq4rPi6Cbw.UUnwUhh-qPbkxtv.o0"
                            target="_blank" class="link_mall _GC_">SM면세점</a></li>
                </ul>
            </div>
            <div class="cate_partner"><strong class="tit_mall">홈쇼핑</strong>
                <ul class="list_mall">
                    <li class="_GI_" data-gg="{s:cjmall}"><a
                            href="/go.daum?skey=z2E9QdpUGk62.vtpmzO6U4ORNo19jcYU91EMbmqGmkOAzL1d3VIvgBt558M766qVYLEQ5B-Pw63TKuEVP-mDO-yr1lZBwN6LAXucZlCE94ecee5P6nk3BDkkWub8X-tRL9i76&amp;val=mng00bybxaZHJAX2yN7TXms5382BKgVfgSwPF_3sdysYTVYaohHnqE8GUFokN85LDy339GeiFTm7or1g0"
                            target="_blank" class="link_mall _GC_">CJ온스타일</a></li>
                    <li class="_GI_" data-gg="{s:lotteimall}"><a
                            href="/go.daum?skey=2WNk0F623K6OyLBchaW12.JbJvkB4O-lruhmuA-gUH1CTvY589yOlgPWjXlUSpASPsHjD1RukQRHQfCZyH-sn_JqexdyQsIAofylVw9RgHlTP_JRqVHfXDa9DdxEz4GludDyozfuX-skC1EHIt2v9goHOHw00&amp;val=ngA007MveBnjhzEo3CrHzJWlqY1To4tRvEy3shcxUEkRGsxbvA-wz7HRnCzS6WHXWJaaGrK_Ikd_h9lk0"
                            target="_blank" class="link_mall _GC_">롯데홈쇼핑</a></li>
                    <li class="_GI_" data-gg="{s:gseshop}"><a
                            href="/go.daum?skey=Yi2rUo--scxZBJcig_EvGQq4.h_oTicgEeJvVucEdQ3BpsS5tra.Va7JnJ5DFTrCm.npYM1pmrs5zUC7bOv898zYQopsrrMYKbFA1-xympf54ODo6CazdXKNs9gEO5RjIWEUY&amp;val=u.Q007EvIbImeYpN67koWcpvZCh84TAgOIcYorj1j.N5GTtbZscTCDvuC3B3Fc_--wlg9fcI5zsIC7bA0"
                            target="_blank" class="link_mall _GC_">GS SHOP</a></li>
                    <li class="_GI_" data-gg="{s:hmall}"><a
                            href="/go.daum?skey=-xQdmlPg4nXNODsQAvrwlRmEHfEYY5VzgnTmPc2ofJD-RBQt3k6o63rQWLrnCT6C8QcR3avTt1kHCEariPtKwi6dssryZWvzX7rZ-uOMip.-fSuCHBOmNZVWX-uaDeZrziRai&amp;val=4Fg00EZ3wp5LNk9P6HLFrF1wtIlDKIw2_jNpGSlDd_ryf1w1TV.3_uNv-4arjDb2VapjQQirZcv-g.FA0"
                            target="_blank" class="link_mall _GC_">현대 Hmall</a></li>
                    <li class="_GI_" data-gg="{s:nseshop}"><a
                            href="/go.daum?skey=xDzAJcwKLNPpYugSStcjk8tITUWfNyylhY4rSeCs4y5v2ZPiGzutl6hRLKnrYL9N8_dPEMW6Dxlus5NOz9mu8Dm-u7zP638VdZMng7qppWFUio4FY2TyiNh1F3RgAGpN7aX4F&amp;val=71Q00bheJ3dMj_7Aq4Pi9u8ssPzEhcgPo-95E7P-7bY9jljoy3MWYq4rPi6Cbw.UUnwUhh-qPbkxtv.o0"
                            target="_blank" class="link_mall _GC_">NSmall</a></li>
                    <li class="_GI_" data-gg="{s:hnsmallcps}"><a
                            href="/go.daum?skey=.KKk092VNiDytdIOVLicClsvBmlNNfcQ7apzLmmff2X2vFycPPFjQI8Vhbslk4y9rvFTcOWbLBwnGbGeLA.tKczWeIiFSQrXEuueixLOIuCRYrUu2Dl5474bYwknjsOA9wcgoogkBTnnJFRVw51FzfmXPtQ00&amp;val=_7g00BxzO.lzN1uGd-mIefS27YSFjCsxjipve.fuwJbwCklv6_A991N.iCvvk_ZsHxHyrvbi3A.mS38U0"
                            target="_blank" class="link_mall _GC_">홈&amp;쇼핑</a></li>
                    <li class="_GI_" data-gg="{s:kthitel}"><a
                            href="/go.daum?skey=-LF2mrfB4QBj6RAFGkGAeZezq7zltaUuTtt3mXXT3.2-YzaCIoJ.9J7o4waYXZ7YAyrB2iaRAQtZYPN9rWyj3xqeqFkYVcPfmE5bkxkXHQofyXW6RfnLivUe569Mo1Ym.TDcr&amp;val=Fig00tRFD6f.x.mV3brNqw5UXhGVjAN8ZOASfKJtTFa2yLDEcDj2Ka8-dbEvM43HcHo-_pq9gFLGhiQI0"
                            target="_blank" class="link_mall _GC_">K쇼핑</a></li>
                    <li class="_GI_" data-gg="{s:shinsegaetvsh01}"><a
                            href="/go.daum?skey=vXA90LT5ij2yaS3t4IJimzuIPLmUC.r2EhmYlKifJqoFiJ8I_ihmZwu-okiqL-ETotvWenDOiDWd9B8eM3Gg-kTFP8e6iRnH5hbnVOGjtBWRvWMYLhPqmo_6BfYGYW-uTsIO44uNywlxEi2jTfVUDARH9sw00&amp;val=HGQ00qc6GtUwg82ExrGBJTYrU2ZwVNCc66HZ6yFvKTjcCAz6lh-5DW_WBN3qfaj.JCecoYJzkIaV1EsY0"
                            target="_blank" class="link_mall _GC_">신세계티비쇼핑</a></li>
                    <li class="_GI_" data-gg="{s:imshopping}"><a
                            href="/go.daum?skey=ryFk0yin_5YZn-LjSDB--VzjUYz-fwRjXxjrXoazUx9Sr9oiYJ43iVO7WAOwFUQUUw3vX5U_9jALsrUCdn3Q4wFK-MEf37rhSRfo2YRT4b46FZ.q9GEKVrml3ekZSnJwy1Ovg8BX3tqpDp7FlGkJlCItxcg00&amp;val=qUg00I4zXzfBRN-pAjb4GHgTfYMVNPh8IJn1xQVL9xH6tBsj1Lnun_xdxpxjGs7DyDuQQQ1-d-Ga7iMo0"
                            target="_blank" class="link_mall _GC_">공영홈쇼핑</a></li>
                </ul>
            </div>
            <div class="cate_partner"><strong class="tit_mall">마트/생활</strong>
                <ul class="list_mall">
                    <li class="_GI_" data-gg="{s:homeplus}"><a
                            href="/go.daum?skey=y8Yk0OZDs.i_1vOIKChR6mf8ob9Mk-prep3aGGkyOT-d8PnpcJGrn_aqk4qI6td9ZZvntnlBfqyxpM3mTb74sJ7sita29vYeD2K_mmf19vGQAjRaKmwIEoLgzAetpv7BkMxQkrk9rEJgEzv3NEiepLkXZxg00&amp;val=mng00bybxaZHJAX2yN7TXms5382BKgVfgSwPF_3sdysYTVYaohHnqE8GUFokN85LDy339GeiFTm7or1g0"
                            target="_blank" class="link_mall _GC_">홈플러스</a></li>
                    <li class="_GI_" data-gg="{s:hookasi}"><a
                            href="/go.daum?skey=888FgMLf7rZMo3HTCGGNGraj624Iu3BsZOIaEtebZQcJvysfaIiTHoyjnLOwzPKyWRRO_vUtnEgtcUWVTuPP1UOSQkxgOmEdXFQ47P3FtAWfWqnxJ6-hgQ-XLX5-SRyVoqK65&amp;val=ngA007MveBnjhzEo3CrHzJWlqY1To4tRvEy3shcxUEkRGsxbvA-wz7HRnCzS6WHXWJaaGrK_Ikd_h9lk0"
                            target="_blank" class="link_mall _GC_">NH마켓</a></li>
                    <li class="_GI_" data-gg="{s:lottemart}"><a
                            href="/go.daum?skey=KCE90.QLJVsTzSSO62WRJb7TqY8-mFe8ZL21JuCQDgmA_9v4oVoXUcpVJV_rhVLGre3PsyAiiE9shfK6JKo-.ks8ktLOUwLef8WgX2moIlsN6LNCfQlQndeY9BCeEBvgqVPAYR5eUw9xIBUFAElV61Cy.7g00&amp;val=u.Q007EvIbImeYpN67koWcpvZCh84TAgOIcYorj1j.N5GTtbZscTCDvuC3B3Fc_--wlg9fcI5zsIC7bA0"
                            target="_blank" class="link_mall _GC_">롯데마트</a></li>
                    <li class="_GI_" data-gg="{s:tenbyten10x10}"><a
                            href="/go.daum?skey=o4gw0GgyFAvRUmHyGMoXEdXuMVFpuxzukT67ulXG_kh8Als2EeKl7f9eGvue2sDcS.KuZci3aFJY3DB9G37P-_WWG9RjIllZz8nYtySMJQcKe-37Z-XyC9BqaCgJ73ZjGztvjN6AMBWGj3MRSLLWuBQKrZQ00&amp;val=4Fg00EZ3wp5LNk9P6HLFrF1wtIlDKIw2_jNpGSlDd_ryf1w1TV.3_uNv-4arjDb2VapjQQirZcv-g.FA0"
                            target="_blank" class="link_mall _GC_">텐바이텐</a></li>
                    <li class="_GI_" data-gg="{s:0to71}"><a
                            href="/go.daum?skey=jmmLTlj7OZd8hielp9v.Ind24o-Xuc6AhhYVGF_fCli8oUgSo._QKRdeoyMDVfwc9.bAu52cloF2J86hIxr_A.i3higQQRJXF-CPq3QrFpPoH1CT97p4HjRl91kYO_yyXWPXC&amp;val=71Q00bheJ3dMj_7Aq4Pi9u8ssPzEhcgPo-95E7P-7bY9jljoy3MWYq4rPi6Cbw.UUnwUhh-qPbkxtv.o0"
                            target="_blank" class="link_mall _GC_">제로투세븐</a></li>
                    <li class="_GI_" data-gg="{s:dongwonmall}"><a
                            href="/go.daum?skey=esI10LX9ymVouvLSN6mUwTnH5ZuAFCddzmJ5mpfqdbUVj2rzMvAND7oSO.bctNPNWAS47g2ieajdNv_Xl6.qMW_IiywxcpF_LPhJ88TM2Ct9U8KDtVrLMZestOcVrlUDu4rAHbDjSgA9-nvj6AzZKuw5egw00&amp;val=_7g00BxzO.lzN1uGd-mIefS27YSFjCsxjipve.fuwJbwCklv6_A991N.iCvvk_ZsHxHyrvbi3A.mS38U0"
                            target="_blank" class="link_mall _GC_">동원몰</a></li>
                    <li class="_GI_" data-gg="{s:cjonmart}"><a
                            href="/go.daum?skey=7OJk0cTgmHyQ_IFQgJtkHIKCR-W1Tp-9FRxVtFNjxsfeMo8jNGzEPjwpIjgP49nzzzaOyw4D7wkG8M_Kbn7qZk9qVefBiBgzBjRZy44gRuyOKmZ-KwQ7fmWF.Vh2nOkMEtYgUgNK4iMUfXA-6IuoKgFjs-g00&amp;val=Fig00tRFD6f.x.mV3brNqw5UXhGVjAN8ZOASfKJtTFa2yLDEcDj2Ka8-dbEvM43HcHo-_pq9gFLGhiQI0"
                            target="_blank" class="link_mall _GC_">CJ더마켓</a></li>
                    <li class="_GI_" data-gg="{s:alphamall1}"><a
                            href="/go.daum?skey=-5E50BGwvLP67B7UzbKJcjT4e8sMjAfS31QHil1HFBDoVreHwpUJsT3VwZja6vRZy-VE_bLWi5pdu9Mfd_hBHBu1XT2aSWY5T_xSUM8KRhVO7BpU-DbfD91zLVrRE9wm-BjN6lGf7uW-W5cRdbTF.61rFhA00&amp;val=HGQ00qc6GtUwg82ExrGBJTYrU2ZwVNCc66HZ6yFvKTjcCAz6lh-5DW_WBN3qfaj.JCecoYJzkIaV1EsY0"
                            target="_blank" class="link_mall _GC_">알파몰</a></li>
                    <li class="_GI_" data-gg="{s:iloveisoi}"><a
                            href="/go.daum?skey=DzaE0RwYUvgukyvspctIIrVHFYh_TEFQpqSkDkN6ZLvjs-zv1FcrWU5SUPASCsAq9M3q27mZmO7Ybyc5zne.otiNlfav1yS-iRBcaXBqRKkH7cJ9u_O4MJ6tCteDCVzQE8aWrcQ2yr9hGe7B4cgir_ZH8MQ00&amp;val=qUg00I4zXzfBRN-pAjb4GHgTfYMVNPh8IJn1xQVL9xH6tBsj1Lnun_xdxpxjGs7DyDuQQQ1-d-Ga7iMo0"
                            target="_blank" class="link_mall _GC_">아이소이</a></li>
                    <li class="_GI_" data-gg="{s:1300k}"><a
                            href="/go.daum?skey=TxEeerukyzVqi7PnQ.7etiIjQoFcPSznqIfTR5plQgF-4NAQ-wXIKDGobYhGYtpGMQ7TFjhbpWsfZagZQoPNMm1CRK1tDoRGNA-emzuYRjKgHM.1_uXVr5dIiRpHA6zr5vEoi&amp;val=QDQ00xsF7ouVDgbl7.d3rYHq.OeTt1lcYEhNUxH_cY5rQmqbboxI9WnN4HfL-XwnAN24qV5EC.q-_FrU0"
                            target="_blank" class="link_mall _GC_">1300k</a></li>
                    <li class="_GI_" data-gg="{s:sajomall}"><a
                            href="/go.daum?skey=mWBc06kOSG6TVMmXRwd3cGiOkZwWVKndfO4B7YqFUfrf9LPyuaWgS7rEBJsH3qKPtJcbMrbP7v.7unl9F7J9L51egXOPUxbg3Pgif6P25MT4PJRvglW4lgku1mPWWUbg5pEcsfTUK6NJ8Khj2kT4hb1ALzw00&amp;val=lWA00vGY_r.TBHGNtZo-Mn7xV1ggKpJcL4fmu_NS5GDZqPixj4WKE6LU4FYklh8b7LuMCEuklv1XfTZU0"
                            target="_blank" class="link_mall _GC_">사조몰</a></li>
                    <li class="_GI_" data-gg="{s:daonmall}"><a
                            href="/go.daum?skey=d94I0tptoGaDMaQcIMxvq2QAmuN8JV3cuHIMihYkmrT2AgQj_9vTkUivweLyGmwLnQBC2b1BsVVHG9CEjE7RIq1uDgTDTDZItCW6OKXBNcKlPnRh9WXi3Eqbxjbh_Fik2J7TlrfFQdO8SL6.B9iecAW9l8w00&amp;val=5RA00kerPYlqZc1reGaB2P2rVXPxqQVzixeKz_e-lCNioDj1BvFVHrCTtGLqGx_mdF.fe1noPVTgUKO50"
                            target="_blank" class="link_mall _GC_">다이소몰</a></li>
                </ul>
            </div>
            <div class="cate_partner"><strong class="tit_mall">소셜</strong>
                <ul class="list_mall">
                    <li class="_GI_" data-gg="{s:g9today}"><a
                            href="/go.daum?skey=v_nCB8LteywvILmKAXXT9STa9TLWTM7.t73-UpWOla2WF5C.pg1liRjtYV.ZO63vAk9Fhz7IuUDeeinS2D3rdbncC9RscgApYmq8n1HDOC5oVc4eNbp5UhblpsKjKS1VfjkBm&amp;val=mng00bybxaZHJAX2yN7TXms5382BKgVfgSwPF_3sdysYTVYaohHnqE8GUFokN85LDy339GeiFTm7or1g0"
                            target="_blank" class="link_mall _GC_">G9</a></li>
                    <li class="_GI_" data-gg="{s:namu-internet}"><a
                            href="/go.daum?skey=rbM90Bx-zp.pDgCD1qpMmrr_Txu72XDGMBMKn4NuX-jakooWrq8No4zRTClGJztKWu5DQ_saUjwMrZZcV7cigGT7Zz9X2_I9aFqAUpGwspd-8KlKkEKr5teU2HKAM4A6qkCCz6e84JUlcV1hayDNhQtS.Pw00&amp;val=ngA007MveBnjhzEo3CrHzJWlqY1To4tRvEy3shcxUEkRGsxbvA-wz7HRnCzS6WHXWJaaGrK_Ikd_h9lk0"
                            target="_blank" class="link_mall _GC_">위메프</a></li>
                    <li class="_GI_" data-gg="{s:ticketmonster}"><a
                            href="/go.daum?skey=xwsU09iKrlHI5td6XMCwvjb8_X.na9BuQXDczYrSwlA6sYvsucybPsNNBbeBJ_m-K7HfReT9RY-NL9wLThGl5-42Ob9UwQjjP2GxCbJVeCFEE9EVmv53Hw19IGYPe5fZWnQPS.dyZsQsy9-ZzBt7VrOS11w00&amp;val=u.Q007EvIbImeYpN67koWcpvZCh84TAgOIcYorj1j.N5GTtbZscTCDvuC3B3Fc_--wlg9fcI5zsIC7bA0"
                            target="_blank" class="link_mall _GC_">티몬</a></li>
                </ul>
            </div>
            <div class="cate_partner"><strong class="tit_mall">패션</strong>
                <ul class="list_mall">
                    <li class="_GI_" data-gg="{s:halfclub}"><a
                            href="/go.daum?skey=Kf2I0cQz8B2IOvHMC.NHu9rlDqh.JPoZLE5.es3Re.oYSFKOcvCq1.Kyk6tbTIBbCtqt89az3DDHTbnBtRo_GjWsQLYrqi42teGXterkxh8rA.Q_oizOAXf66sFXmGPYDSNyRA76fZO-MuHY27Bal5Y4tgQ00&amp;val=mng00bybxaZHJAX2yN7TXms5382BKgVfgSwPF_3sdysYTVYaohHnqE8GUFokN85LDy339GeiFTm7or1g0"
                            target="_blank" class="link_mall _GC_">하프클럽</a></li>
                    <li class="_GI_" data-gg="{s:fashionplus}"><a
                            href="/go.daum?skey=Os2c0vrWSE1oLWCXipOvt1YKDobUHi5t6p_.Xemxif.r-LMdH8uLHQWUrAe-pOx6Kfyt8kpwrMzoE2VeL4q6ZPvATimYsXkzIEIjezz-jSJ-N3c5EWGLsanUoQ1_SdTOqYyn7cIqVysYQri6zF-qZld4hDQ00&amp;val=ngA007MveBnjhzEo3CrHzJWlqY1To4tRvEy3shcxUEkRGsxbvA-wz7HRnCzS6WHXWJaaGrK_Ikd_h9lk0"
                            target="_blank" class="link_mall _GC_">패션플러스</a></li>
                    <li class="_GI_" data-gg="{s:istyle24}"><a
                            href="/go.daum?skey=iDlk08ZYtfUAIGavayuQuHLpRGqELOOlHfCCQ9hX8vcsPMhO9s.u5cAKpawzZr7jweojWWlOLf19Pk16jAmcFWY-csLvBq3_Q4un-wUF7fwOsMbw44XzG698XzYdEy6mH1b2sD9E.oKvDLhjetMadjyp74g00&amp;val=u.Q007EvIbImeYpN67koWcpvZCh84TAgOIcYorj1j.N5GTtbZscTCDvuC3B3Fc_--wlg9fcI5zsIC7bA0"
                            target="_blank" class="link_mall _GC_">아이스타일24</a></li>
                    <li class="_GI_" data-gg="{s:lgfashionshop}"><a
                            href="/go.daum?skey=Hwa90.2tmt-RNHUcVTwVTelkKOW2CSqCDP5.11X1SdOS7boaYvoO-bT_NyRlYvTIqwyci4U.V7Znp-TpLOwX279Sba-CcIZWKpzoMEdjB6zLIqIqEH.KvAGNacGHsqZNc9-X9D1t_kaXXfgEIirLArNFrtw00&amp;val=4Fg00EZ3wp5LNk9P6HLFrF1wtIlDKIw2_jNpGSlDd_ryf1w1TV.3_uNv-4arjDb2VapjQQirZcv-g.FA0"
                            target="_blank" class="link_mall _GC_">LFmall</a></li>
                    <li class="_GI_" data-gg="{s:boriboris}"><a
                            href="/go.daum?skey=HQVw0PpenooD3Rp.2nSWsc2Zj_rzsB7UgwQu3aiXxMv7pj-.ZTE9m2nKIzNoNLgGDRhAxSmeGzJrvuPGR67b8iPMGo9bs6WrJpnIWY28ebe.PJ4cCqCrLfMnHkIloTwNj6zInPt9zl-RQ8A.CfpNaiKfaog00&amp;val=71Q00bheJ3dMj_7Aq4Pi9u8ssPzEhcgPo-95E7P-7bY9jljoy3MWYq4rPi6Cbw.UUnwUhh-qPbkxtv.o0"
                            target="_blank" class="link_mall _GC_">보리보리</a></li>
                    <li class="_GI_" data-gg="{s:yongmangu00}"><a
                            href="/go.daum?skey=2qFE0GSnqMzTruhMUNLEZEyXB5Vz7Mc7Emm_yOd6wX8CghTMTLFEBalf8qBu1FZTicfCh9Y6JYcTcwgREOM2_Fm3nkU6MMWPhzgO6x.yAlHpvBzCFQyLqJuFALj3T_7SkAL_Coy9aynoNTKL.A4XZOaNyLg00&amp;val=_7g00BxzO.lzN1uGd-mIefS27YSFjCsxjipve.fuwJbwCklv6_A991N.iCvvk_ZsHxHyrvbi3A.mS38U0"
                            target="_blank" class="link_mall _GC_">머스트잇</a></li>
                    <li class="_GI_" data-gg="{s:wizwid}"><a
                            href="/go.daum?skey=SL43f3WdFWx3Vy93CSFuVW6RWb9a9RFdfh6NexzCDati5.1BBpjeugDreIsES69gU6cwMa-39dAgx7sVcYoBYZMytepZkauRGfOTOzBYB7a4ZrB6fDstZc7ZvmClf4hBefrE2&amp;val=Fig00tRFD6f.x.mV3brNqw5UXhGVjAN8ZOASfKJtTFa2yLDEcDj2Ka8-dbEvM43HcHo-_pq9gFLGhiQI0"
                            target="_blank" class="link_mall _GC_">위즈위드</a></li>
                    <li class="_GI_" data-gg="{s:musinsa2}"><a
                            href="/go.daum?skey=J4Og0jE4w45_GXC_XLxVoLWX_7vTYoBqi55XRyYHq6yfYSxnhXhaIu8I9LL2STDSDBiG7j7g81w9KNE_OML5UhMZ6VNDhcQK1iLOML5Qiq6Lda7jxIAkiRoH1Zwc8vBWb-LXXHypNEvpg6nPmTg5OkXiPwQ00&amp;val=HGQ00qc6GtUwg82ExrGBJTYrU2ZwVNCc66HZ6yFvKTjcCAz6lh-5DW_WBN3qfaj.JCecoYJzkIaV1EsY0"
                            target="_blank" class="link_mall _GC_">무신사스토어</a></li>
                    <li class="_GI_" data-gg="{s:poombuy2}"><a
                            href="/go.daum?skey=osc90KpdukSFTCQhXHso.RK_rE6TehDxYk_jRnqAgCMQKak.Q9prCDSlcMJT2HIgYj.5n6kV2qOALkRfM2fxQWctPCcDK.JGLvkYkdnRDarGjkdZhQeQ4c9XuhFwYpCAokl9rMNI3osuP1bH.UcG9xIymXQ00&amp;val=qUg00I4zXzfBRN-pAjb4GHgTfYMVNPh8IJn1xQVL9xH6tBsj1Lnun_xdxpxjGs7DyDuQQQ1-d-Ga7iMo0"
                            target="_blank" class="link_mall _GC_">품바이</a></li>
                    <li class="_GI_" data-gg="{s:louislouis}"><a
                            href="/go.daum?skey=Ht1o04nXcRY2XyJDTr8QN5-KUyYRK7XUC2YVnHA4UacvKYWLuEsxnjLpYH3LuQjx.lPbMGG2tFPK8Gr3pD77eySPn4Z9ALC7h56W5Xmw7Ce7Kg.OwILPdtyxaZQBQk-VSZIRY53JdCc5TbQH12Wm46U_pmQ00&amp;val=QDQ00xsF7ouVDgbl7.d3rYHq.OeTt1lcYEhNUxH_cY5rQmqbboxI9WnN4HfL-XwnAN24qV5EC.q-_FrU0"
                            target="_blank" class="link_mall _GC_">루이까또즈</a></li>
                    <li class="_GI_" data-gg="{s:michaelkors01}"><a
                            href="/go.daum?skey=ZNvs0YmoPduObypTGoUHVlgYyq3xxc4sr3izFqAvpuW5DvgQor81l9IXpZkL1G1J1l1a.8zbMzBzdU1ag-W1DchEBht7SSEd-gg28QC7zczsTUi_YYUNah4BWilXxh926vLuM_Erb2roDp9jK3nIDP.dkjw00&amp;val=lWA00vGY_r.TBHGNtZo-Mn7xV1ggKpJcL4fmu_NS5GDZqPixj4WKE6LU4FYklh8b7LuMCEuklv1XfTZU0"
                            target="_blank" class="link_mall _GC_">마이클코어스</a></li>
                    <li class="_GI_" data-gg="{s:gabangpop}"><a
                            href="/go.daum?skey=RBN502gD-.zb.jFcZSMVvKr_4_OwaMDlP-AEIfnGq5Upxd3sK.ei3_5lat28.IijRZRgVs3NMXoIUKwQ.6qgllE74SKbIM7pSWqXFiK6cSJhHF-QmmdKb6WSVTwL29lQ2WyHBJupKqUh_PQpAHCrBDBXW_Q00&amp;val=5RA00kerPYlqZc1reGaB2P2rVXPxqQVzixeKz_e-lCNioDj1BvFVHrCTtGLqGx_mdF.fe1noPVTgUKO50"
                            target="_blank" class="link_mall _GC_">가방팝</a></li>
                    <li class="_GI_" data-gg="{s:no_freeshipping}"><a
                            href="/go.daum?skey=Vlf90yVV1Qd.SkA.yMEUFlHt-tPP3Ay_5Ep_BTyAiXeWcGIpPrvz6b-w_A7bbpjRQpbyjbLVu7vYxJO9MHg3HdSxwFszPTibkuuMYy71nSsQo.eXQ.5LBGO_8rcmRYotk_qGafELgn5sFI-KRayh69ioPFw00&amp;val=Zvg00-zXLx3LLwQrum6lHbT1Tu7PCOaFm6y5UwDgm5u_8t5QAeNSthnlEj_kJqPGwhMyWAgorRjtJL7M0"
                            target="_blank" class="link_mall _GC_">프리쉽</a></li>
                </ul>
            </div>
            <div class="cate_partner"><strong class="tit_mall">레저/취미</strong>
                <ul class="list_mall">
                    <li class="_GI_" data-gg="{s:okoutdoor1024}"><a
                            href="/go.daum?skey=2UFg0ulwzmCscR6FQFvJ7RCkfMQqhiosFJWZinLpFK6iaB1IcjmoXOLUxNCsS3OS-sAavcVcfynkBImdUazDnOiBwixb46nihz-UZMnU_amP4UUcR.Gnmocab-fNyEoinyGZCCE.nxtHs_A76REkiuYx8XQ00&amp;val=mng00bybxaZHJAX2yN7TXms5382BKgVfgSwPF_3sdysYTVYaohHnqE8GUFokN85LDy339GeiFTm7or1g0"
                            target="_blank" class="link_mall _GC_">오케이몰</a></li>
                    <li class="_GI_" data-gg="{s:anavehi}"><a
                            href="/go.daum?skey=oKSD845jfaHqf1W_mmPjfbFvSqOYw2zo9zIrLN-RUOif-JzDTNbwit7XLJnD9AcqP.VK1HOdPgf2J5c7pUkYbcIqwmnJwkWWLLps8Sw5NPkgu3AltksAVB8GLN6VC.nQQ1uzt&amp;val=ngA007MveBnjhzEo3CrHzJWlqY1To4tRvEy3shcxUEkRGsxbvA-wz7HRnCzS6WHXWJaaGrK_Ikd_h9lk0"
                            target="_blank" class="link_mall _GC_">고르고타고</a></li>
                </ul>
            </div>
            <div class="cate_partner"><strong class="tit_mall">도서/공연</strong>
                <ul class="list_mall">
                    <li class="_GI_" data-gg="{s:yes24}"><a
                            href="/go.daum?skey=tCb_5T.id8erw8tVXxrCckjDXkngBWT4fq2Pijxb..Fpd2vA65ri3RXonXCzDQLExwKwNqipLGPnz4zx_jEMdLPnwG6o-u6ADwleh1AoiS8C1SWsxzKc2rFey8_jIu2-.K9SK&amp;val=mng00bybxaZHJAX2yN7TXms5382BKgVfgSwPF_3sdysYTVYaohHnqE8GUFokN85LDy339GeiFTm7or1g0"
                            target="_blank" class="link_mall _GC_">YES24 티켓</a></li>
                    <li class="_GI_" data-gg="{s:gmarket_ticket}"><a
                            href="/go.daum?skey=fLl10NZYRLgZsuqqNbWeSjZvCwWkpgPQ661YzBYihGC_bohZAf5Z.baVhPV6wfn-Q_WtvZv6eHAEPrm5guJ83lvkpUzPE7zDM4DzTRYT-c6drrelE9k1sTkzkPzArL6rCZmUgwnFJKC77bJpF5VK79oMVaQ00&amp;val=ngA007MveBnjhzEo3CrHzJWlqY1To4tRvEy3shcxUEkRGsxbvA-wz7HRnCzS6WHXWJaaGrK_Ikd_h9lk0"
                            target="_blank" class="link_mall _GC_">G마켓 티켓</a></li>
                    <li class="_GI_" data-gg="{s:auction_ticket}"><a
                            href="/go.daum?skey=oMYU0L7F8VsQJyP7BHBlCcVN36aCQrB5DGkdu94rke1ujpVs9bSQGAXMFs1.-mKTgc_zrSzRwe_NbTsEUIV1zren3PTdrvBAlxmpPqPd-eetVsutbYubr8JM5j2vJkRqiQWzWkk2tDLBHfhxBNLqsKy71Sg00&amp;val=u.Q007EvIbImeYpN67koWcpvZCh84TAgOIcYorj1j.N5GTtbZscTCDvuC3B3Fc_--wlg9fcI5zsIC7bA0"
                            target="_blank" class="link_mall _GC_">옥션 티켓</a></li>
                    <li class="_GI_" data-gg="{s:ticketlink}"><a
                            href="/go.daum?skey=13Ms0Ap19_gr7ERWy54pA4NK2UrVQvG1d9NBg8HuOK9X6mgA2LJ53Ps6IAemJnbExJDaZG77EHTGffqahAXPG3nUlQ9Vqt7IsvJ1wEjCMws4pFDlHS6rHskht.oBhYsVhrc143MeICwDe3.-NwpfvSxB.-g00&amp;val=4Fg00EZ3wp5LNk9P6HLFrF1wtIlDKIw2_jNpGSlDd_ryf1w1TV.3_uNv-4arjDb2VapjQQirZcv-g.FA0"
                            target="_blank" class="link_mall _GC_">티켓 링크</a></li>
                    <li class="_GI_" data-gg="{s:interpark_ent}"><a
                            href="/go.daum?skey=Up_M0YloR94lRUe6nlbo5-Ct1Wfxj2-aeImLQPkkEo5IGKEdaEPw3g7rtbiS8i_j7dOwAjzonQKnDaJ1vJuZD_w89WRfaFptkEydazEe6qn.SgSGtKcMoPFQezfI8rrG43vfUNfFc8FiV.6q5BTQgtNgSrA00&amp;val=71Q00bheJ3dMj_7Aq4Pi9u8ssPzEhcgPo-95E7P-7bY9jljoy3MWYq4rPi6Cbw.UUnwUhh-qPbkxtv.o0"
                            target="_blank" class="link_mall _GC_">인터파크 티켓</a></li>
                </ul>
            </div>
        </div><button type="button" class="btn_home _GC_">더보기</button>
    </div><a href="/siso/p/partner" class="link_all _GC_">전체보기</a>`
  }
}