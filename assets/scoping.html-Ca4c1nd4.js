import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as h,c as m,b as i,w as e,d as o,a as r,e as s}from"./app-D5nkWkWC.js";const p={},b=o('<div class="hint-container caution"><p class="hint-container-title">Caution</p><p>IT IS A DRAFT</p></div><h2 id="morphosyntactic-terminology" tabindex="-1"><a class="header-anchor" href="#morphosyntactic-terminology"><span>Morphosyntactic Terminology</span></a></h2><h3 id="dependency-grammar" tabindex="-1"><a class="header-anchor" href="#dependency-grammar"><span>Dependency Grammar</span></a></h3><p>New Ithkuil syntax is easy to be analyzed thru <a href="https://en.wikipedia.org/wiki/Dependency_grammar" target="_blank" rel="noopener noreferrer">Dependency Grammar</a>.</p><blockquote><p>Dependency is a one-to-one correspondence: for every element (e.g. word or morph) in the sentence, there is exactly one node in the structure of that sentence that corresponds to that element. The result of this one-to-one correspondence is that dependency grammars are word (or morph) grammars. All that exist are the elements and the dependencies that connect the elements into a structure.</p></blockquote><h3 id="parts-of-speech" tabindex="-1"><a class="header-anchor" href="#parts-of-speech"><span>Parts of speech</span></a></h3><p>In New Ithkuil, there are three parts of speech (abbr. PoS): Formative, Adjunct, and Referential.</p><p>This is based on the definition of morphological slots. If defined according to syntax, we can make some subdivisions.</p><h3 id="nominal-vs-verbal" tabindex="-1"><a class="header-anchor" href="#nominal-vs-verbal"><span>Nominal vs Verbal</span></a></h3><p>The Unframed Verbal Formative (abbr. UnV) bears ultimate stress and serves as the parent node of the highest-level clause within the sentence.</p><p>A formative exhibiting penultimate stress is classified as a Nominal Formative (abbr. NoF), whereas one displaying antepenultimate stress is categorized as a Framed Verbal Formative (abbr. FrV).</p><p>Nominal and Framed Verbal Formatives frequently serve as arguments to a Verbal Formative within the same clause, facilitated by Case and Case-Scope mechanisms. However, they also have the capacity to stand alone as complete sentences, devoid of an UnV.</p><p>Referentials and Suppletive Adjuncts serve the same syntactic function as (Nominal) Formatives; Although, they can only convey <abbr>CCN</abbr> case-scope (or <abbr>CCP/CCV</abbr> when in any Appositive/Associative/Relational case). Should their Slot lack the capacity to convey the necessary morphological information, it is recommended to utilize alternative Formatives or to apply Affix(ual Adjunct)s to meet the requirements.</p><p>The Unframed Verbal Formative and the Framed Verbal Formative are both types of Verbal Formative that can be utilized in constructing a clause.</p><p>A Verbal Formative (VeF) governs <abbr>CCA/CCS</abbr>-marked Formatives within the same clause. In the absence of <abbr>CCA/CCS</abbr>-marked Formatives, it governs <abbr>CCN</abbr>-marked Formatives. If there are adjacent Formatives marked with <abbr>CCP/CCV</abbr>, VeF also governs them. Note that the Case-Scope of a FrV interacts with the outside, not with the inside of the frame.</p><p>A term <em>Declined PoS</em> (DeP) refers to a PoS embodying <code>Vc</code>, namely, Nominal, Framed Verbal Formative, Referential and Suppletive Adjunct. Note that an UnV with Case-Stacking Affix is not regarded as a DeP.</p>',16),f=o('<h3 id="case-scope" tabindex="-1"><a class="header-anchor" href="#case-scope"><span>Case-Scope</span></a></h3><p>Case-Scope constitutes a syntactic category of a DeP.</p><ul><li>A <abbr>CCA</abbr>-marked DeP governs every <abbr>CCN</abbr>-marked DeP within the same clause.</li><li>A <abbr>CCS</abbr>-marked DeP governs every <abbr>CCQ</abbr>-marked DeP within the same clause.</li><li>A <abbr>CCP/CCV</abbr>-marked DeP modifies the adjacent formative.</li></ul><p>Zero Case-Scope represents a distinctive instance of Case-Scope, wherein its presence suggests solely <abbr>CCN/CCP/CCV</abbr>, contingent upon the Case with which a DeP is marked. Typically, if a DeP marked with zero Case-Scope is assigned any Appositive/Associative/Relational case, it assumes <abbr>CCP/CCV</abbr> Case-Scope; conversely, if not, it assumes <abbr>CCN</abbr> Case-Scope.</p><p>The interplay between Zero Case-Scope and Case-Stacking Affix(es) unfolds thus: The application of a Case-Stacking Affix facilitates the addition of another case onto a formative, allowing it to bear multiple Case markings. When one of these Cases is of the Appositive/Associative/Relational variety while the other is not, it denotes that the formative carries both <abbr>CCN</abbr> and <abbr>CCP/CCV</abbr> Case-Scopes. However, when a DeP is marked with non-Zero Case-Scope and Case-Stacking Affix(es), it retains only a singular Case-Scope.</p><p>Notably, No Case-Scope diverges from Zero Case-Scope. It denotes a specialized instance of UnV, indicating the absence of Case-Scope, thereby permitting an UnV to govern any formative designated with any Case-Scope (excluding <abbr>CCQ</abbr>, which necessitates a formative marked with <abbr>CCS</abbr>) within the same clause.</p><p>The following situations are worth noting</p><ul><li>A <abbr>CCP/CCV</abbr>-marked DeP outside a frame can potentially modify both the initial formative (FrV) and the terminal DeP (the end of frame) within the frame. In this case, it should be considered dependent on a DeP within the frame but syntactically exterior to it.</li><li>A <abbr>CCP/CCV</abbr> chain (aka P0) is a modifying group of multiple DeP’s marked with <abbr>CCP/CCV</abbr>.</li><li>A pairing of [CCP] [CCV] denotes an incongruous combination wherein two DeP’s mutually modify and govern each other.</li><li>FrV is not compatible with <abbr>CCP</abbr>, unless the frame itself concludes with the same FrV. However, it is not obligatory for the FrV to be both the initial and final element of a frame, as this condition is equivalent to a NoF.</li></ul><h3 id="phrase-vs-frame" tabindex="-1"><a class="header-anchor" href="#phrase-vs-frame"><span>Phrase vs Frame</span></a></h3><p>These two terms are used to distinguish syntactic units composed of NoF and FrV.</p><p>A phrase refer to a syntactic unit consisting of a NoF as the head.</p><p>Phrase 0 deviates from conventional phrases, serving as a succession of modifiers, with its head being a non-<abbr>CCP/CCV</abbr> formative.</p><p>A frame signifies a clause constructed by a FrV.</p>',13),u=o('<h2 id="register-and-sentence-initial-bias" tabindex="-1"><a class="header-anchor" href="#register-and-sentence-initial-bias"><span>Register and Sentence-Initial Bias</span></a></h2><p>Register Adjuncts have the ability to govern any designated noun, single Formative, phrase, clause, or sentence, including Register clauses. Register Initial Adjunct and Final Adjunct encapsulate the governed content. A Register clause frequently imparts semantic insights to an adjoining formative (verbal or nominal); however, it should not be assumed that these words hold scope over the Register clause. Given that a Register clause functions as a parenthetical and self-contained sentence, its removal does not disrupt the overall message conveyed by the original sentence. These clauses have the flexibility to be situated at any point within a sentence, and may even function as standalone sentences. A typical illustration of this is the <abbr>NRR</abbr> Register, which, being the default Register, is frequently disregarded; thus, it is prudent to presume that any sentence, including sentences enclosed by Non-<abbr>NNR</abbr>, is <abbr>NNR</abbr>-marked. It is advisable to consider every sentence as being governed by the <abbr>NNR</abbr> Register. As <abbr>NNR</abbr> is signified by the zero marker, a <abbr>NNR</abbr> clause is inherently autonomous, not subject to subordination by other Register clauses, yet capable of exerting influence over each one individually.</p><p>A Sentence-Initial Bias governs the entirety of the sentence, except for the <abbr>NRR</abbr> Register. Bias(es) can form a sentence, but should still be <abbr>NNR</abbr>-marked.</p><div class="indent"><dl class="gloss"><dt>∅</dt><dd>NRR</dd></dl><dl class="gloss"><dt>(Çë)rral.</dt><dd>([sentence:]​-)“cat”-OBS</dd></dl><dl class="gloss"><dt>∅</dt><dd>NRR_END</dd></dl><div class="glend">A simple sentence composed of single UnV</div><dl class="gloss"><dt>∅</dt><dd>NRR</dd></dl><dl class="gloss"><dt>(Çë)hi</dt><dd>([sentence:]​-)SPF</dd></dl><dl class="gloss"><dt>...</dt><dd>...</dd></dl><dl class="gloss"><dt>hiu.</dt><dd>SPF_END</dd></dl><dl class="gloss"><dt>∅</dt><dd>NRR_END</dd></dl><div class="glend">A sentence composed of single Register clause</div><dl class="gloss"><dt>∅</dt><dd>NRR</dd></dl><dl class="gloss"><dt>(Çë)lf</dt><dd>([sentence:]​-)ACC</dd></dl><dl class="gloss"><dt>lst.</dt><dd>ANP</dd></dl><dl class="gloss"><dt>∅</dt><dd>NRR_END</dd></dl><div class="glend">A sentence composed of Biases</div></div><p>Simple Sentence</p>',5),g=o('<h2 id="pos-coordinative-connective-affixes" tabindex="-1"><a class="header-anchor" href="#pos-coordinative-connective-affixes"><span>PoS &amp; Coordinative/Connective Affixes</span></a></h2><p>The Coordinative and Connective Affixes, employed in the formation of a Coordination Structure, serve the purpose of linking formatives, phrases, frames, or clauses within sentences. Analogous to the conjunctions and conjunctional phrases found in natural languages, they facilitate the seamless integration of linguistic elements.</p><p>The use of Coordinative and Connective Affixes is restricted to cases where the superordinate clauses of the joined constituents are identical. For instance:</p><ol><li>I simultaneously <em>cherish</em> <strong>and abhor</strong> you. [sharing the same arg]</li><li>I <em>adore you</em> <strong>yet despise him</strong>. [sharing partial arg]</li><li>I hold affection for both you and him. [the same role]</li><li>The knowledge <em>from his instruction</em>, <strong>and on the functioning of the world</strong>. [different roles]</li><li>Presently, you grasp that about which both <em>my sentiments</em> <strong>and his dissent</strong> are. [within a frame]</li></ol><p>Therefore, the conjunction of clauses across different levels is proscribed. “I love and that which you love” necessitates revision to “I love something, and there exists that which you love.”</p>',5),v=o('<h2 id="scoping-in-affixual-slots-of-formative" tabindex="-1"><a class="header-anchor" href="#scoping-in-affixual-slots-of-formative"><span>Scoping In Affixual Slots Of Formative</span></a></h2><p>The application of Type-1 and -2 affixes to a Formative encompasses all preceding morphemes within the Formative.</p><p>The morphosyntactic behavior of Type-3 affix is to modify the preceding affix, unless it is the first affix in an affixual slot.</p><p>We can make the following analogy: a T3 affix is similar to a DeP marked <abbr>CCP/CCV</abbr>, whose head is the adjacent affix. We can also generate a T3 affix chain similar to P0.</p><p>While this concept is readily comprehensible, the utilization of Type-3 affix(es) remains contentious due to inconsistencies in their definitions.</p><p>As evidenced, disparities in English definitions of affixes are present in the Affix document:</p><ol><li>Attributives, including adjectives, adjectival phrases, adverbs, adverbial phrases, prepositional phrases, etc., for instance, the <abbr>EXN</abbr> affix.</li><li>Heads, including nouns, noun phrases, verbs, verb phrases, etc., exemplified by the <abbr>NPE</abbr> affix.</li><li>Grammatical descriptions or others.</li></ol><p>Given their potential impact on the scoping of Type-3 affix(es), it is imperative to elucidate these variations.</p><p>An affix may undergo transformation into a Cs-root, thereby generating a formative derived from said Cs-root.</p><ul><li><abbr>EXN/3</abbr>: to a small degree</li><li><abbr>NPE/1</abbr>: the extent/degree of X; the degree to which X is present</li></ul><p>Consequently, the <abbr>EXN/3</abbr> affix can transform into a VeF, signifying ‘for there to be something to a small degree’, while the <abbr>NPE/1</abbr> affix can do so, denoting ‘for there to be the extent/degree of something’.</p><p>“cat”-<abbr>AFT/2</abbr>: a cute cat = <em>a cute one/being of cat</em> = <em>a cat of cuteness/being cute</em> = <em>a cat which manifests cuteness</em></p><ol><li>“cat”-<abbr>AFT/2</abbr>-<abbr>EXN/3</abbr>: (an existence of) a cute cat to a small degree</li><li>“cat”-<abbr>AFT/2</abbr>-<abbr>EXN/3₃</abbr>: a cat which manifests cuteness to a small degree</li><li>“cat”-<abbr>AFT/2</abbr>-<abbr>NPE/1</abbr>: the degree to which a cute cat is present</li><li>“cat”-<abbr>AFT/2</abbr>-<abbr>NPE/1₃</abbr>: a cat which manifests cuteness to a degree (of being present)</li></ol><p>For head-defined affixes, a general method of designating the head as a modifier is to put an expression such as ‘in terms of ...,’ ‘in relation to ...,’ ‘of ...,’ ‘in association with ...,’ and others prior to the head. E.g.</p><ol><li>“cat”-<abbr>AFT/2</abbr>-<abbr>MAK/7</abbr>: the making of cute cat.</li><li>“cat”-<abbr>AFT/2</abbr>-<abbr>MAK/7₃</abbr>: a cat which manifests cuteness in association with the making/construction of something.</li></ol><p>Inteplay of attributive-defined affix and head-defined affix:</p><ol><li>“cat”-<abbr>MAK/7</abbr>-<abbr>AFT/2</abbr>: the cat-making which manifests cuteness</li><li>“cat”-<abbr>MAK/7</abbr>-<abbr>AFT/2₃</abbr>: the making, which manifests cuteness, of a cat</li></ol><p>The above use also applies to Type-3 Case-Accessor Affixes.</p><p>Type-3 Coordinative/Connective Affixes are used to link an affix to another affix preceding.</p>',19),y=r("h2",{id:"case-scope-on-concatenated-formative-in-concatenated-chain",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#case-scope-on-concatenated-formative-in-concatenated-chain"},[r("span",null,"Case-Scope on Concatenated Formative in Concatenated Chain")])],-1),C=r("p",null,"In a Concatenated Pair, the Case-Scope of a Concatenated Formative may be disregarded, as it functions as a whole participating in the internal morpheme scoping of the Parent Formative. Conversely, in a Concatenated Chain, the Case-Scope of Concatenated Formatives holds significance. Analogous to formatives within a frame, concatenated formatives in a concatenated chain have the capacity to comprise phrases, with the exception of frames. The scoping mechanism remains similar and thus requires no further elaboration.",-1);function A(w,x){const n=l("Mermaid"),c=l("Tabs");return h(),m("div",null,[b,i(c,{id:"52",data:[{id:"UnV"},{id:"NoF"},{id:"FrV"},{id:"Adjunct on morphemes within a formative"}]},{title0:e(({value:a,isActive:t})=>[s("UnV")]),title1:e(({value:a,isActive:t})=>[s("NoF")]),title2:e(({value:a,isActive:t})=>[s("FrV")]),title3:e(({value:a,isActive:t})=>[s("Adjunct on morphemes within a formative")]),tab0:e(({value:a,isActive:t})=>[i(n,{id:"mermaid-54",code:"eJxlUk1PwzAMve9XWDsgOJQfwAFplE5MYgxtoxwiDlnqtGFZ0iXZKP8eJy0fFZVc2a/p83t2siybBBU03sBG2FaZGh4UOu5E8wlWwtK6tsEDenhVoVEGOLwY6fgBKyjR7biGuXUHHtQZJ5FMavshGu4CbO8mQI8PDr2/fNFB0TGETaqvsuvs9kwE/ZnTrna8bSBfrQtguXUIF5D7sntL3zmbrq0NKd8EPPRJi0JJJai3NdP+4I7NT0ZEoK8FI5H+p6zYRtsAJcykVB36Ac2yW0Gxo+AJQVONddk2AFu1kZjr/i9k03z1lM+2xRPFfcLmq/Vytl2UxSDnH0/OyR0nb2WXD90l8VgjVX1yyUkCoz6t/jqrWdEFNL9eGvZM1mgGcfQ9pFjhPRoxlO+D28Vi7PedfCqKhqKmkCOtezadJdpUFVJ+p494Rp2y54Z7TFnJdew3aNS0OROwC0NJ3HuKnNOLJhhT2u94IvEOQNzS6Cr1BC1baG3FKe0zcjDqp6o0llgbtrS2Go868tGnXuiR3Sk+uD4Smi7cF12/3rQ="})]),tab1:e(({value:a,isActive:t})=>[i(n,{id:"mermaid-57",code:"eJxlUctuwjAQvPMVKw5Ve0g/oAckSIOKVB4iKD1YPRizTgyOHWxD07/vxkkfqJEm2h3b45l1kiSjoILGJ8iFbZQp4UWh405Un2AlLK1rKqzRw5sKlTLAYe54jQco0O25hrl1NQ/qiqNOSmr7ISruAuxmI6DPB4fe32/QXHRQtBMhj9RD8phM6n7PZV863lSQrrcZsNQ6hDtIfdG+x3XOxltrQ6zzgP2hvEGhpBJ0tzXjfuOezS9GdETfC0Ym/U97YLm2AQqYSqla9AObJBNB2BN4ZNAcbn3ZJgBbN50w1/0pZON0vUqnu2xFeI7cfL1dTneLIhvs/NNJOaXjlK1o0+F2STrWSFVeXEwSyc6fVn+TlSxrA5rfLBXbUDSaQTf6nlIs8x6NGNrjkHaxuM17pJyKUBFKgrzxemLjaZSNXSbld/mKV9Sx2lTcY6wKrrv7Bo+aXs4EbMPQkvaJkHL60QS7kt43rtXU9GJnNlN8cHYmtqYBeUrwBZV8wCA="})]),tab2:e(({value:a,isActive:t})=>[i(n,{id:"mermaid-60",code:"eJxlUctOwzAQvPcrVj0gOIQP4IAUQioq0YeaKhwsDq67Ttw6dmq7Jfw9Gyc8KiJNtDu2xzPrJEkmQQWND1AI2ypTwYtCx52oP8FKWFjX1tighzcVamWAw8zxBvdQottxDTPrGh7UBSe9lNT2Q9TcBdg+TYA+Hxx6f5uagC2asw6KdiMUkb5L7pPHZth33lWOtzVkq00OLLMO4QYyX3bvcZ2z6cbaEOsi4HCoaFEoqQTdb8102Lhjs7MRPTH0gpFR/9PuWaFtgBJSKVWHfmST5FEQdgQeGTT7a1+2DcBWbS/M9XAK2TRbLbN0my8Jz5GbrTaLdDsv89HOP52MUzpO2couG2+XpGONVNXZxSSR7P1p9TdZxfIuoPnNUrM1RaMZ9OMfKMVy79GIsT2Maefz67wHyqkINaEiyCuvRzZNo2zscim/y1e8oI7VuuYeY1Vy3d83etT0cvTUXRhb0j4SMk4/mmBf0vvGtYaaQezEnhQfnZ2IbWhAnhJ8AcUDwcg="})]),tab3:e(({value:a,isActive:t})=>[i(n,{id:"mermaid-63",code:"eJxtjzsOwjAQRPucYpWCinAEpKSgo6NDSFnsdbwosS1/EoocHgeUICSm3DdavVG9nYRGH+HSFJAT0r3z6DRgp96HJZI9icjWrK0lQl3L9mT9gJFHasvbRhAzqZXiZ8IeavlIRsSN7uBsZerR/yENY/j9VB2q41y2nR3JGzYdDNY7TQMFmDhqNoCgVon915gcGbn0s3TUBMGRYMUkIQjrMmjLWXwW5mLxAkuqThI="})]),_:1}),f,i(c,{id:"138",data:[{id:"Phrases"},{id:"Frames"}]},{title0:e(({value:a,isActive:t})=>[s("Phrases")]),title1:e(({value:a,isActive:t})=>[s("Frames")]),tab0:e(({value:a,isActive:t})=>[i(n,{id:"mermaid-140",code:"eJyVkk1PhDAQhu/+igmnlQSkcDdZUY4Es8YLMdlSxgXlK6W7xoQfb1mK0CUbdC5Np52Z9+nb96L+YhnlAl4ebkBGe0wOnDYZNE5sRBmnLYJjvJ3P+khzjkzkdTUW9NE4NA5y3grw/ejO91+tkvJPTCGoeUlFfsKpQeMk8S6vDgXCI0bzPLuST2PbtucJaln3nZrUyX76lunb9FyI1bBOeG6s6NxZa5fGxt73t6P+sA5gkyFNb/ezN2jcRF4zzacT8u9erWlCXoHIEFpaIrCCHlvUK5is2KYflGElpmeBTeRctFZwYSenLNOKymUa1byKXHCSkZOsmUgG+HAFnvTwf0EhumYy4Cyd8H4/mrf60bxB425Fo/dvgzxp0BUo7Zpieu7kjGVaoXqTPT8b0epS"})]),tab1:e(({value:a,isActive:t})=>[i(n,{id:"mermaid-143",code:"eJyF0U1rwkAQBuB7f8WQUxsI+br1UEhT7K1NG9GDCK5m1l2Mq+xGRMiPd9w1GAU1sJeZfZ+ZsLze7BeC6QaGny9AH+cTb/aFRVgIzQyGA83W+GreYLNrjKwQGoHAT8WZN3UJSQnfz9QBSqmWNQLFfd/2fv/BdZx2W7X4uTiWjZDK8oaq1zPMbr7UbCuAxxPPpiA+t+wKMaMd8vwnWDO9wgpGOOiiqCq3ZhwEHy3dCfO8oDNqOb+xk85O+nbi7OyRnTy1085O+3bq7PKRnTr7774ddXb0Dt+oULO6PyQ6DenJ7tGuh0Ts8gcZnbKlG0c0iJMf"})]),_:1}),u,i(n,{id:"mermaid-159",code:"eJyNUsFq4zAQvecrBp8cg7t7XtiC6yXQw6YmbtNDKFiRx7FaRTYjxaHgj+9ITtLSXCoQgjfz3sx7KE3TmVNO4x/IoETj0EiEeyP1DWRaQyHIWXho4Lmj2s58e6O7o2wZh8e7GfCxh+2ORN8Cyc0Kd8o6JJBaHCy+hAZ/akUonerMmeUPSRlfGFn9ejDSzS9VeYzzzm/k4Fm5VpnPEhPTm/RWHgOCpg4vnaTiqLqoxsvlCjqj3+dVNPHPXWl6SzIgWyUsc87203ujnBIa7hiHuHRCvomtRtgL8w5O7dFei/E2Xsa/Y1TtugHJWHAtwrHtmGtP4lU0DoE58Pwxz5e/8rzgux6p4fQaJG7k4VNyl2htv8l4eHnoe41ODQj5TwK2HPAXznXEMs4FkcIaTlF/1pgb3MjQYEc5hXUOe9isccE/Bf4LZU7bwF94Mutppyt/tg940zebqEqSUpkd5/IPiyQJhYcVJIk3WbQkLH5HFyT2DFbRlXzGtxxZNxSEl2ejQvqPs+hoL7z32M55u+L3N/60mmhmH0vC5jw="}),g,i(c,{id:"199",data:[{id:"DeP-COO"},{id:"UnV-COO"}]},{title0:e(({value:a,isActive:t})=>[s("DeP-COO")]),title1:e(({value:a,isActive:t})=>[s("UnV-COO")]),tab0:e(({value:a,isActive:t})=>[i(n,{id:"mermaid-201",code:"eJyVkLFuwjAQhvc8xb2AK9GxA0OpOtEG0YolYrjYF2IpsaOzExYW8qg8CUcChIGFWyz9/+/v151SKok2VvQBX7Q69cfx6dUiTZOLWVR+r0vkCP+fCciENt8xNiXokC28Z2MdRusd/EVudWyZtkMOjGXSg7Nejsrj72KWjYXXtAwKjwnQGUhjSQw/npuSagpThpx5wnofWf2Um8qX67uYv1BQzEC9qflB7nCQgkG7eV22Ic6xgm/PtSzfEVgHQoSANYGusA20VWquw5BvXLZCJhfh1xsxhNslZzc3cdo="})]),tab1:e(({value:a,isActive:t})=>[i(n,{id:"mermaid-204",code:"eJyVUj1vwkAM3fkVFlMYrhIdOyAVpkoUpNCPAVXi4hhybbhDPqcREkv5qf0lvSQkEWqXerFk+71nPVspNRAjOd3Bs335Pn816axmy+Wgam5zV2KmWeBpOoAQvkh2rA8ZMK5j2hkvxIC5Ljy91QNVpIYJxTjboqpgxKhD3KfvhUUZdV0so5mzQlbg1UhmbN8KQHWjJljWFbJpnflCFQ03HWu0WMTgbH4cbYYNvp1SasJYVxKjfcCsghJZJPVgjRidwzTUIVqJxg+d5AR7bY8gZk/+N1nYpqKp8mnnPomtB8kIyswFJLr9wRU2BX/ROKG/9g79euYcp8bq2qWVcIFScGth718872zo0NvxujlWb7gOfEygg+gyLMLw6PiQUVi+n2mNu+a6bbjOfx1vHnfF5B8C2zHUzoQfOgWB7mo/24y86A=="})]),_:1}),v,i(n,{id:"mermaid-324",code:"eJw1jjEOwjAMRfeewhcwEowMSIDEhAABYqkYTOrSSCWpnLQwdKFH5SSkafsXW+9/+RsRE699yUtY57n+/LovjkuH2+Mx6QN5ad+qIPFw3SQQ5OrHU6gqQLl0a61k2pDX1sDFS618LXyPOci0sIrOeT+QIJqnU9cY6+Figt0AaQ44w1UbnmiDGxmbLM4mvbE8qISdlVdobhi0AV8wOHoxqJJqx3fElXIxX5n0RMLGw8FmwQh3m+QPwFJOwQ=="}),y,C,i(n,{id:"mermaid-331",code:"eJx1kM0KwjAQhO8+xdKTBur/WagBj1pUvBTBdRtNRFNJoyL48KZqf8Q6kEt25tthd8fkRhKNheW4AU7pZbs3eJZAFPFEE9o2hKhMh0tUev3yZIqVEWRVovNgJqJe5G1CNEJbmCTmhFZdxcYrY0R952AsRxemZtpirLDN5sBYoO9QVJAGU8HYN6vnt/3Rg/Nph/PAvcXD8SvzgdsVxAekrM/PSmgSatgKkALjVj05dMRBleh/vs/d8jzdanL4dqz+O3L2yrGHkVd3ik8XoePGE7Phc+Y="})])}const S=d(p,[["render",A],["__file","scoping.html.vue"]]),k=JSON.parse('{"path":"/en/draft/scoping.html","title":"Scoping in New Ithkuil","lang":"en-US","frontmatter":{"title":"Scoping in New Ithkuil","description":"Caution IT IS A DRAFT Morphosyntactic Terminology Dependency Grammar New Ithkuil syntax is easy to be analyzed thru Dependency Grammar. Dependency is a one-to-one correspondence...","head":[["meta",{"property":"og:url","content":"https://yuorb.github.io/en/draft/scoping.html"}],["meta",{"property":"og:site_name","content":"Yuorb"}],["meta",{"property":"og:title","content":"Scoping in New Ithkuil"}],["meta",{"property":"og:description","content":"Caution IT IS A DRAFT Morphosyntactic Terminology Dependency Grammar New Ithkuil syntax is easy to be analyzed thru Dependency Grammar. Dependency is a one-to-one correspondence..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-19T13:14:07.000Z"}],["meta",{"property":"article:author","content":"天邪弱 Lucifer Caelius Delicatus"}],["meta",{"property":"article:modified_time","content":"2024-08-19T13:14:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Scoping in New Ithkuil\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-19T13:14:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"天邪弱 Lucifer Caelius Delicatus\\",\\"url\\":\\"https://www.zhihu.com/people/ryanlo713\\"}]}"]]},"headers":[{"level":2,"title":"Morphosyntactic Terminology","slug":"morphosyntactic-terminology","link":"#morphosyntactic-terminology","children":[{"level":3,"title":"Dependency Grammar","slug":"dependency-grammar","link":"#dependency-grammar","children":[]},{"level":3,"title":"Parts of speech","slug":"parts-of-speech","link":"#parts-of-speech","children":[]},{"level":3,"title":"Nominal vs Verbal","slug":"nominal-vs-verbal","link":"#nominal-vs-verbal","children":[]},{"level":3,"title":"Case-Scope","slug":"case-scope","link":"#case-scope","children":[]},{"level":3,"title":"Phrase vs Frame","slug":"phrase-vs-frame","link":"#phrase-vs-frame","children":[]}]},{"level":2,"title":"Register and Sentence-Initial Bias","slug":"register-and-sentence-initial-bias","link":"#register-and-sentence-initial-bias","children":[]},{"level":2,"title":"PoS & Coordinative/Connective Affixes","slug":"pos-coordinative-connective-affixes","link":"#pos-coordinative-connective-affixes","children":[]},{"level":2,"title":"Scoping In Affixual Slots Of Formative","slug":"scoping-in-affixual-slots-of-formative","link":"#scoping-in-affixual-slots-of-formative","children":[]},{"level":2,"title":"Case-Scope on Concatenated Formative in Concatenated Chain","slug":"case-scope-on-concatenated-formative-in-concatenated-chain","link":"#case-scope-on-concatenated-formative-in-concatenated-chain","children":[]}],"git":{"createdTime":1715305958000,"updatedTime":1724073247000,"contributors":[{"name":"ryanlo713","email":"12672523+ryanlo713@users.noreply.github.com","commits":2}]},"readingTime":{"minutes":9.4,"words":2820},"filePathRelative":"en/draft/scoping.md","localizedDate":"May 10, 2024","autoDesc":true}');export{S as comp,k as data};
