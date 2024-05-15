<template>
  <div class="slide2-demo-show-card">
    <div class="slide2-demo-show-card-stack">
      <ul class="slide2-demo-show-card-list">
        <li
          v-for="(card, index) in cards"
          :key="index"
          :class="{
            activeNow: index === currentCardIndex,
            transformThis: index === nextCardIndex,
            transformPrev: index === prevCardIndex
          }"
        >
          <MdPreview style="
          position: absolute; 
          left: 24px; 
          top: 18px;
          right: 24px; 
          bottom: 60px;
          width: calc(100% - 48px);
          " :modelValue=card.message />

          <div class="slide2-demo-show-card-list-footer">
            <slide2DecorationIcn />
            <p class="slide2-demo-show-card-list-footer-summary">{{ card.summary }}</p>
          </div>
        </li>
      </ul>
      <div
        class="slide2-demo-show-card-description">
        「知识卡片」从提问中发现问题
      </div>
      <a class="slide2-demo-show-card-buttons prev" @click="prevCard">
        <leftBtnIcon />
      </a>
      <a class="slide2-demo-show-card-buttons next" @click="nextCard">
        <rightBtnIcon />
      </a>
    </div>
  </div>
</template>

<script>
import leftBtnIcon from '../icons/left-btn-icn.vue'
import rightBtnIcon from '../icons/right-btn-icn.vue'
import slide2DecorationIcn from '../icons/slide2-decoration-icn.vue'
import { MdPreview} from 'md-editor-v3'; 
import '../../assets/md-css/website.css'; 

export default {
  name: 'slide2-demo-show-card',
  components: {
    leftBtnIcon,
    rightBtnIcon,
    slide2DecorationIcn,
    MdPreview
  },
  data() {
    return {
      cards: [
        {
          title: 'Card 1',
          image: 'path/to/image1.jpg',
          description: 'This is the first card.',
          message: '# `（示例）`同学，关于“如何写一篇标准论文”的问题\n ## 推测你可能遇到了以下问题:\n - 研究型论文写作方法不清晰\n - 论文写作框架不明确\n - 论文写作流程模糊\n \n ## 以下是书卷侠的解答：\n\n 撰写一篇标准的论文需要遵循一定的结构和格式规范，这有助于确保论文内容的清晰性、逻辑性和专业性。以下是撰写标准论文的一般步骤和要点：\n 1. 选题与研究问题： \n\n   - 确定一个明确的研究领域和主题。\n - 形成具体的研究问题或假设。\n \n 2. 文献回顾： \n - 搜集和阅读与研究主题相关的文献。\n - 总结现有研究的主要观点、发现和不足。\n - 明确自己研究的创新点和价值。\n 3. 研究方法：\n - 描述研究设计、样本、数据收集和分析方法。\n - 说明所选方法的合理性和适用性。\n\n 4. 数据收集与分析：\n - 根据研究方法收集数据。\n - 使用适当的统计工具或分析框架对数据进行分析。\n - 得出研究结果，并与研究问题或假设相对照。 \n\n 5. 论文结构：\n - 引言：介绍研究背景、研究问题、研究目的和重要性。\n - 文献综述：概述相关研究和理论框架。\n - 方法论：详细描述研究方法和实施过程。\n - 结果：展示数据分析结果，通常包括图表和统计数据。\n - 讨论：解释研究结果的意义，与文献综述中的研究进行比较，并讨论研究的局限性。\n - 结论：总结研究发现，提出研究的意义、建议和未来研究方向。\n\n 6. 引用与参考文献：\n - 准确引用所有参考的文献，遵循相应的引用格式（如APA、MLA、Chicago等）。\n - 参考文献列表应包含论文中引用的所有资料。\n\n 7. 格式与编辑：\n - 遵循学术期刊或学术机构的格式要求，包括字体、行距、页边距等。仔细校对，确保语言准确、语法无误、拼写正确。\n\n 8. 附录：\n - 如有必要，提供额外的数据、工具或材料，以供读者参考。\n - 提交前的检查： 确保所有部分都符合要求。 检查是否有抄袭问题，并确保所有引用都是恰当的。',
          summary: '基础论文写作方法'
        },
        {
          title: 'Card 2',
          image: 'path/to/image2.jpg',
          description: 'This is the second card.',
          message: '# `（示例）`同学，关于“如何写一篇标准论文”的问题\n ## 推测你可能遇到了以下问题:\n - 研究型论文写作方法不清晰\n - 论文写作框架不明确\n - 论文写作流程模糊\n \n ## 以下是书卷侠的解答：\n\n 撰写一篇标准的论文需要遵循一定的结构和格式规范，这有助于确保论文内容的清晰性、逻辑性和专业性。以下是撰写标准论文的一般步骤和要点：\n 1. 选题与研究问题： \n\n   - 确定一个明确的研究领域和主题。\n - 形成具体的研究问题或假设。\n \n 2. 文献回顾： \n - 搜集和阅读与研究主题相关的文献。\n - 总结现有研究的主要观点、发现和不足。\n - 明确自己研究的创新点和价值。\n 3. 研究方法：\n - 描述研究设计、样本、数据收集和分析方法。\n - 说明所选方法的合理性和适用性。\n\n 4. 数据收集与分析：\n - 根据研究方法收集数据。\n - 使用适当的统计工具或分析框架对数据进行分析。\n - 得出研究结果，并与研究问题或假设相对照。 \n\n 5. 论文结构：\n - 引言：介绍研究背景、研究问题、研究目的和重要性。\n - 文献综述：概述相关研究和理论框架。\n - 方法论：详细描述研究方法和实施过程。\n - 结果：展示数据分析结果，通常包括图表和统计数据。\n - 讨论：解释研究结果的意义，与文献综述中的研究进行比较，并讨论研究的局限性。\n - 结论：总结研究发现，提出研究的意义、建议和未来研究方向。\n\n 6. 引用与参考文献：\n - 准确引用所有参考的文献，遵循相应的引用格式（如APA、MLA、Chicago等）。\n - 参考文献列表应包含论文中引用的所有资料。\n\n 7. 格式与编辑：\n - 遵循学术期刊或学术机构的格式要求，包括字体、行距、页边距等。仔细校对，确保语言准确、语法无误、拼写正确。\n\n 8. 附录：\n - 如有必要，提供额外的数据、工具或材料，以供读者参考。\n - 提交前的检查： 确保所有部分都符合要求。 检查是否有抄袭问题，并确保所有引用都是恰当的。',
          summary: '基础论文写作方法'
        },
        {
          title: 'Card 3',
          image: 'path/to/image2.jpg',
          description: 'This is the second card.',
          message: '# `（示例）`同学，关于“如何写一篇标准论文”的问题\n ## 推测你可能遇到了以下问题:\n - 研究型论文写作方法不清晰\n - 论文写作框架不明确\n - 论文写作流程模糊\n \n ## 以下是书卷侠的解答：\n\n 撰写一篇标准的论文需要遵循一定的结构和格式规范，这有助于确保论文内容的清晰性、逻辑性和专业性。以下是撰写标准论文的一般步骤和要点：\n 1. 选题与研究问题： \n\n   - 确定一个明确的研究领域和主题。\n - 形成具体的研究问题或假设。\n \n 2. 文献回顾： \n - 搜集和阅读与研究主题相关的文献。\n - 总结现有研究的主要观点、发现和不足。\n - 明确自己研究的创新点和价值。\n 3. 研究方法：\n - 描述研究设计、样本、数据收集和分析方法。\n - 说明所选方法的合理性和适用性。\n\n 4. 数据收集与分析：\n - 根据研究方法收集数据。\n - 使用适当的统计工具或分析框架对数据进行分析。\n - 得出研究结果，并与研究问题或假设相对照。 \n\n 5. 论文结构：\n - 引言：介绍研究背景、研究问题、研究目的和重要性。\n - 文献综述：概述相关研究和理论框架。\n - 方法论：详细描述研究方法和实施过程。\n - 结果：展示数据分析结果，通常包括图表和统计数据。\n - 讨论：解释研究结果的意义，与文献综述中的研究进行比较，并讨论研究的局限性。\n - 结论：总结研究发现，提出研究的意义、建议和未来研究方向。\n\n 6. 引用与参考文献：\n - 准确引用所有参考的文献，遵循相应的引用格式（如APA、MLA、Chicago等）。\n - 参考文献列表应包含论文中引用的所有资料。\n\n 7. 格式与编辑：\n - 遵循学术期刊或学术机构的格式要求，包括字体、行距、页边距等。仔细校对，确保语言准确、语法无误、拼写正确。\n\n 8. 附录：\n - 如有必要，提供额外的数据、工具或材料，以供读者参考。\n - 提交前的检查： 确保所有部分都符合要求。 检查是否有抄袭问题，并确保所有引用都是恰当的。',
          summary: '基础论文写作方法'
        },
        {
          title: 'Card 4',
          image: 'path/to/image1.jpg',
          description: 'This is the first card.',
          message: '# `（示例）`同学，关于“如何写一篇标准论文”的问题\n ## 推测你可能遇到了以下问题:\n - 研究型论文写作方法不清晰\n - 论文写作框架不明确\n - 论文写作流程模糊\n \n ## 以下是书卷侠的解答：\n\n 撰写一篇标准的论文需要遵循一定的结构和格式规范，这有助于确保论文内容的清晰性、逻辑性和专业性。以下是撰写标准论文的一般步骤和要点：\n 1. 选题与研究问题： \n\n   - 确定一个明确的研究领域和主题。\n - 形成具体的研究问题或假设。\n \n 2. 文献回顾： \n - 搜集和阅读与研究主题相关的文献。\n - 总结现有研究的主要观点、发现和不足。\n - 明确自己研究的创新点和价值。\n 3. 研究方法：\n - 描述研究设计、样本、数据收集和分析方法。\n - 说明所选方法的合理性和适用性。\n\n 4. 数据收集与分析：\n - 根据研究方法收集数据。\n - 使用适当的统计工具或分析框架对数据进行分析。\n - 得出研究结果，并与研究问题或假设相对照。 \n\n 5. 论文结构：\n - 引言：介绍研究背景、研究问题、研究目的和重要性。\n - 文献综述：概述相关研究和理论框架。\n - 方法论：详细描述研究方法和实施过程。\n - 结果：展示数据分析结果，通常包括图表和统计数据。\n - 讨论：解释研究结果的意义，与文献综述中的研究进行比较，并讨论研究的局限性。\n - 结论：总结研究发现，提出研究的意义、建议和未来研究方向。\n\n 6. 引用与参考文献：\n - 准确引用所有参考的文献，遵循相应的引用格式（如APA、MLA、Chicago等）。\n - 参考文献列表应包含论文中引用的所有资料。\n\n 7. 格式与编辑：\n - 遵循学术期刊或学术机构的格式要求，包括字体、行距、页边距等。仔细校对，确保语言准确、语法无误、拼写正确。\n\n 8. 附录：\n - 如有必要，提供额外的数据、工具或材料，以供读者参考。\n - 提交前的检查： 确保所有部分都符合要求。 检查是否有抄袭问题，并确保所有引用都是恰当的。',
          summary: '基础论文写作方法'
        },
        {
          title: 'Card 5',
          image: 'path/to/image2.jpg',
          description: 'This is the second card.',
          message: '# `（示例）`同学，关于“如何写一篇标准论文”的问题\n ## 推测你可能遇到了以下问题:\n - 研究型论文写作方法不清晰\n - 论文写作框架不明确\n - 论文写作流程模糊\n \n ## 以下是书卷侠的解答：\n\n 撰写一篇标准的论文需要遵循一定的结构和格式规范，这有助于确保论文内容的清晰性、逻辑性和专业性。以下是撰写标准论文的一般步骤和要点：\n 1. 选题与研究问题： \n\n   - 确定一个明确的研究领域和主题。\n - 形成具体的研究问题或假设。\n \n 2. 文献回顾： \n - 搜集和阅读与研究主题相关的文献。\n - 总结现有研究的主要观点、发现和不足。\n - 明确自己研究的创新点和价值。\n 3. 研究方法：\n - 描述研究设计、样本、数据收集和分析方法。\n - 说明所选方法的合理性和适用性。\n\n 4. 数据收集与分析：\n - 根据研究方法收集数据。\n - 使用适当的统计工具或分析框架对数据进行分析。\n - 得出研究结果，并与研究问题或假设相对照。 \n\n 5. 论文结构：\n - 引言：介绍研究背景、研究问题、研究目的和重要性。\n - 文献综述：概述相关研究和理论框架。\n - 方法论：详细描述研究方法和实施过程。\n - 结果：展示数据分析结果，通常包括图表和统计数据。\n - 讨论：解释研究结果的意义，与文献综述中的研究进行比较，并讨论研究的局限性。\n - 结论：总结研究发现，提出研究的意义、建议和未来研究方向。\n\n 6. 引用与参考文献：\n - 准确引用所有参考的文献，遵循相应的引用格式（如APA、MLA、Chicago等）。\n - 参考文献列表应包含论文中引用的所有资料。\n\n 7. 格式与编辑：\n - 遵循学术期刊或学术机构的格式要求，包括字体、行距、页边距等。仔细校对，确保语言准确、语法无误、拼写正确。\n\n 8. 附录：\n - 如有必要，提供额外的数据、工具或材料，以供读者参考。\n - 提交前的检查： 确保所有部分都符合要求。 检查是否有抄袭问题，并确保所有引用都是恰当的。',
          summary: '基础论文写作方法'
        }
      ],
      currentCardIndex: 0,
      nextCardIndex: 1, // Index of the next card (initially 1)
      prevCardIndex: -1 // Index of the previous card (initially -1)
    }
  },
  methods: {
    nextCard() {
      // Update indices for transitions and active card
      this.prevCardIndex = this.currentCardIndex
      this.currentCardIndex = this.nextCardIndex
      this.nextCardIndex = (this.nextCardIndex + 1) % this.cards.length
      // Add a delay to allow the transition to complete before manipulating the DOM
      setTimeout(() => {
        // Logic to move the first card to the beginning (similar to prependList)
        this.cards.unshift(this.cards.pop())
        this.prevCardIndex = -1 // Reset prevCardIndex after DOM manipulation
      }, 150)
    },
    prevCard() {
      // Update indices for transitions and active card
      this.nextCardIndex = this.currentCardIndex
      this.currentCardIndex = this.prevCardIndex
      this.prevCardIndex = (this.currentCardIndex - 1 + this.cards.length) % this.cards.length
      // Add a delay to allow the transition to complete before manipulating the DOM
      setTimeout(() => {
        // Logic to move the last card to the end (similar to appendToList)
        this.cards.push(this.cards.shift())
        this.nextCardIndex = (this.currentCardIndex + 1) % this.cards.length // Reset nextCardIndex after DOM manipulation
      }, 150)
    }
  }
}
</script>


<style scoped>
.slide2-demo-show-card {
  width: 100%;
  height: 100%;
  position: relative;
}

.slide2-demo-show-card .slide2-demo-show-card-stack {
  width: 100%;
  height: 520px;
  position: absolute;
}

@media screen and (max-width: 1500px) {
  .slide2-demo-show-card-stack,
  .slide2-demo-show-card {
      width: 100%;
  }
}

.slide2-demo-show-card .slide2-demo-show-card-stack .slide2-demo-show-card-buttons {
  position: absolute;
  border: 2px solid #e5e5e5;
  border-radius: 12px;
  width: 48px;
  height: 48px;
  left: 0;
  bottom: 0;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}
.slide2-demo-show-card .slide2-demo-show-card-stack .prev {
  left: 0;
  right: auto;
}
.slide2-demo-show-card .slide2-demo-show-card-stack .next {
  left: auto;
  right: 0;
}
.slide2-demo-show-card .slide2-demo-show-card-stack .slide2-demo-show-card-list {
  width: 397px;
}

.slide2-demo-show-card .slide2-demo-show-card-stack .slide2-demo-show-card-list li {
  transition: all 100ms ease-in-out;
  border-radius: 12px;
  position: absolute;
  list-style: none;
  height: 397px;
  -webkit-box-shadow: 0 2px 15px 1px rgba(225, 225, 225, 0.5);
  box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.5);
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: start;
  background: #fff;
}
.slide2-demo-show-card .slide2-demo-show-card-stack .slide2-demo-show-card-list li:nth-child(1) {
  top: 0;
  width: 60%;
}
.slide2-demo-show-card .slide2-demo-show-card-stack .slide2-demo-show-card-list li:nth-child(2) {
  top: 12px;
  width: 70%;
}
.slide2-demo-show-card .slide2-demo-show-card-stack .slide2-demo-show-card-list li:nth-child(3) {
  top: 24px;
  width: 80%;
}
.slide2-demo-show-card .slide2-demo-show-card-stack .slide2-demo-show-card-list li:nth-child(4) {
  top: 36px;
  width: 90%;
}
.slide2-demo-show-card .slide2-demo-show-card-stack .slide2-demo-show-card-list li:nth-child(5) {
  top: 48px;
  width: 100%;
}

.slide2-demo-show-card-list-footer {
  margin:24px 18px;
  width: 100%;
  display: flex;
  position: absolute;
  bottom:0;
  left:0;
  right:0;
}
.slide2-demo-show-card-list-footer-summary {
  position:absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size:14px;
  font-weight: 630;

  color: #00BD79;
;
}

.slide2-demo-show-card-description {
  position: absolute;
  bottom: 0;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  color: #8c8c8c;
  font-family: MiSans;
  font-size: 16px;
  font-weight: 380; 
}


.transformThis {
  animation: scaleDown 500ms;
}
.transformPrev {
  animation: scaleUp 100ms;
  display: none;
}
@keyframes scaleUp {
  0% {
    transform: scale(1.2) translateY(50px);
    opacity: 0;
  }
  20% {
    transform: scale(1.15) translateY(40px);
    opacity: 0.1;
  }
  40% {
    transform: scale(1.1) translateY(30px);
    opacity: 0.2;
  }
  60% {
    transform: scale(1.05) translateY(20px);
    opacity: 0.4;
  }
  80% {
    transform: scale(1.01) translateY(10px);
    opacity: 0.8;
  }
  100% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}
@keyframes scaleDown {
  0% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
  20% {
    transform: scale(1.01) translateY(20px);
    opacity: 0.8;
  }
  40% {
    transform: scale(1.05) translateY(40px);
    opacity: 0.4;
  }
  60% {
    transform: scale(1.1) translateY(60px);
    opacity: 0.2;
  }
  80% {
    transform: scale(1.15) translateY(80px);
    opacity: 0.1;
  }
  100% {
    transform: scale(1.2) translateY(100px);
    opacity: 0;
  }
}
@keyframes scaleCard {
  0% {
    top: 5px;
  }
  100% {
    top: 24px;
  }
}
@keyframes bounceInLeft {
  0% {
    opacity: 0;
    transform: translateX(40px);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes bounceInRight {
  0% {
    opacity: 0;
    transform: translateX(-40px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>