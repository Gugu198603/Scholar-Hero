    <template>
        <div class="slide3-show-cases">
            <ul class="slide3-show-cases-line">
                <li
                    v-for="show_case in show_cases_1"
                    :key="show_case.id"
                    class="slide3-show-cases-line-box"
                >
                    <img :src="show_case.img" alt="showcaseImg">
                    <p>{{ show_case.title }}</p>
                </li>
            </ul>
            <slogn class="slide3-show-cases-slogn"></slogn>
            <a href="#" class="slide3-show-cases-card-botton">
                了解更多
                <linkIcn style="margin-left: 9px;"/>
            </a>
        </div>
    </template>
  <script>
  import slide3_loading_1_1 from '../../assets/img/loading-src/home-slide3-1-1.png'
  import linkIcn from '../icons/link-icn.vue';
  import slogn from '../icons/home-slide3-slogn.vue'
  
  export default {
    name: 'slide3-show-case',
    components: {
        linkIcn,
        slogn
    },
    data() {
      return {
        show_cases_1: [
            {
                id:1,
                img: slide3_loading_1_1,
                title: '继续教育学院（高等职业技术学院）开展“人工智能的落地应用”专题培训',
            },
            {
                id:2,
                img: slide3_loading_1_1,
                title: '继续教育学院（高等职业技术学院）开展“人工智能的落地应用”专题培训',
            },
            {
                id:3,
                img: slide3_loading_1_1,
                title: '继续教育学院（高等职业技术学院）开展“人工智能的落地应用”专题培训',
            },
            {
                id:4,
                img: slide3_loading_1_1,
                title: '继续教育学院（高等职业技术学院）开展“人工智能的落地应用”专题培训',
            },
            {
                id:5,
                img: slide3_loading_1_1,
                title: '继续教育学院（高等职业技术学院）开展“人工智能的落地应用”专题培训',
            },
            {
                id:6,
                img: slide3_loading_1_1,
                title: '继续教育学院（高等职业技术学院）开展“人工智能的落地应用”专题培训',
            }
      ]
      }
    }
  }
  </script> 
  <style scoped>
  ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li {
  list-style-type: none;
}
.slide3-show-cases {
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
}

.slide3-show-cases-line {
    position: absolute;
    /* width: 100%; */
    top: 110px;
    left: 27px;
    right: 27px;
    gap:32px;
    display: flex;
    flex-direction: row;
    overflow: scroll;
}
.slide3-show-cases-slogn {
    display:none;
}

.slide3-show-cases-line-box {
    flex-shrink: 0;
    height: 250px;
    width: 200px;
    display: flex;
    flex-direction: column;

    overflow: hidden; /* 超出高度隐藏内容 */
    overflow-x: auto; /* 显示滚动条 */
    overflow-wrap: break-word; /* 长单词换行 */
}

.slide3-show-cases-line-box p {
    margin-top:10px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden; /* 超出行数隐藏文本 */
    text-overflow: ellipsis; /* 使用省略号显示文本 */
    white-space: normal;
}

.slide3-show-cases-line-box img {
    height: 200px;
    width: 200px;
    border-radius: 3px 3px 3px 3px;
}


.slide3-show-cases-card-botton {
    position: absolute;
    right:18px;
    bottom:18px;

    height:48px;
    width:182px;

    display: flex;
    align-items: center;
    justify-content: center;

    justify-content: center;
    align-items: center;
    /* gap: 8px; */
    border-radius: 74px;
    background: linear-gradient(180deg, #1A1A1A 0%, #252525 92.86%);

    color: #FFF;
    font-family: MiSans;
    font-size: 18px;
    font-style: normal;
    font-weight: 380;
    line-height: normal;
}

@media (max-width: 501px) {
    .slide3-show-cases {
        height: 377px;
        top: calc(100% - 377px);
        bottom: 0;
        position: absolute;
    }
    .slide3-show-cases-line {
    position: absolute;
    top: 24px;
    left: 0;
    right: 0;
    gap:16px;
    display: flex;
    flex-direction: row;
    font-size:12px;
}
.slide3-show-cases-line-box {
    width: 126px;
    height: 164px;
}
.slide3-show-cases-line-box p {
    margin-top:6px;
}

.slide3-show-cases-line-box img {
    height: 126px;
    width: 126px;
    border-radius: 4px;
}
.slide3-show-cases-card-botton {
    display: none;
}
.slide3-show-cases-slogn {
    display: block;
    position: absolute;
    top:244px;
    left: calc(50% - 153px);
}
}

  </style>