<template>
  <div class="slide2-demo-card">
    <div class="slide2-demo-card-heading">
      <div class="slide2-demo-card-heading-switch-btn">知识解答</div>
      <div
        class="slide2-demo-card-heading-switch-btn"
        style="left: 150px; color: #818181; border: none; padding-bottom: 3px"
      >
        敬请期待
      </div>

      <p class="slide2-demo-card-heading-haveTomes">剩余试用提问次: {{ haveTimes }}</p>

      <div class="slide2-demo-card-heading-more-btn">体验完整版</div>
    </div>

    <div class="slide2-demo-card-content">
      <div
        v-for="(message, index) in messages"
        :key="index"
        class="chatbox-message-wrapper"
        :class="message.sender"
      >
        <img
          class="chatbox-message-item-avatar"
          :src="homeslide2botimg"
          v-if="message.sender === 'received'"
          style="margin: 0 10px 0 0"
        />
        <div class="chatbox-message-item" :class="message.sender">
          <span class="chatbox-message-item-text" v-html="message.text"></span>
        </div>
      </div>
      <div class="chatbox-message-no-message" v-if="!messages.length">
        You don't have any messages yet!
      </div>
    </div>

    <div class="slide2-demo-card-input">
      <textarea
        type="text"
        placeholder="试试向我提问~"
        v-model="inputMessage"
        @keydown.enter.prevent="handleEnter"
        @input="resizeTextarea"
        ref="textarea"
        rows="1"
      >
      </textarea>
      <div class="slide2-demo-card-input-submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="40"
          viewBox="0 0 72 40"
          fill="none"
          @click="handleEnter"
        >
          <rect width="72" height="40" rx="20" fill="#00BD79" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M44.7922 29.0427C45.7146 29.0427 46.2956 28.0493 45.8434 27.2454L37.0512 11.6148C36.5901 10.7951 35.4099 10.7951 34.9488 11.6148L26.1566 27.2454C25.7044 28.0493 26.2854 29.0427 27.2078 29.0427H33.5879C34.254 29.0427 34.794 28.5027 34.794 27.8366V24.5911C34.794 24.1606 34.5461 23.7782 34.2498 23.4659C33.8396 23.0335 33.5879 22.4492 33.5879 21.8061C33.5879 20.4739 34.6679 19.394 36 19.394C37.3322 19.394 38.4121 20.4739 38.4121 21.8061C38.4121 22.4492 38.1604 23.0335 37.7502 23.4659C37.4539 23.7782 37.2061 24.1606 37.2061 24.5911V27.8366C37.2061 28.5027 37.746 29.0427 38.4121 29.0427H44.7922Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import homeslide2botimg from '../../assets/img/framework/homeslide2botimg.png'

export default {
  name: 'slide2-demo-card',
  data() {
    return {
      inputMessage: '',
      messages: [],
      homeslide2botimg: homeslide2botimg,
      haveTimes: 5
    }
  },
  methods: {
    resizeTextarea() {
      const textarea = this.$refs.textarea
      const chatboxForm = this.$el.querySelector('.slide2-demo-card-input')
      let line = textarea.value.split('\n').length

      if (textarea.rows < 6 || line < 6) {
        textarea.rows = line
      }

      if (textarea.rows > 1) {
        chatboxForm.style.alignItems = 'flex-end'
      } else {
        chatboxForm.style.alignItems = 'center'
      }
    },
    handleEnter(event) {
      if (event.shiftKey) {
        event.preventDefault()
        this.inputMessage += '\n'
        this.resizeTextarea()
      } else {
        if (this.haveTimes > 0) this.sendMessage()
      }
    },
    sendMessage() {
      if (this.inputMessage.trim() !== '') {
        const message = {
          sender: 'sent',
          text: this.inputMessage.trim().replace(/\n/g, '<br>\n'),
          time: this.getCurrentTime()
        }
        this.messages.push(message)
        this.inputMessage = ''
        this.$nextTick(() => {
          this.scrollToBottom()
          setTimeout(this.autoReply, 1000)
        })
      }
    },
    autoReply() {
      const message = {
        sender: 'received',
        text: 'Thank you for your awesome support!',
        time: this.getCurrentTime()
      }
      this.messages.push(message)
      this.haveTimes--
      this.$nextTick(() => {
        this.scrollToBottom()
      })
    },
    scrollToBottom() {
      const content = this.$el.querySelector('.slide2-demo-card-content')
      content.scrollTop = content.scrollHeight
    },
    getCurrentTime() {
      const now = new Date()
      return `${this.addZero(now.getHours())}:${this.addZero(now.getMinutes())}`
    },
    addZero(num) {
      return num < 10 ? '0' + num : num
    }
  }
}
</script>
<style scoped>
.slide2-demo-card {
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}
.slide2-demo-card-heading {
  height: 44px;
  background: #2c2c2c;
  color: #ffffff;
  border-radius: 8px 8px 0 0;
  position: relative;
}

.slide2-demo-card-heading-switch-btn {
  margin-left: 24px;
  position: absolute;
  bottom: 0;
  left: 0;

  height: 30px;

  border-bottom: 3px solid rgba(0, 189, 121, 0.62);
  padding: 0 31px;

  display: flex;
  align-items: start;
  justify-content: center;

  font-family: MiSans, MiSans;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  text-align: left;
}

.slide2-demo-card-heading-haveTomes {
  color: #969696;
  font-family: MiSans;
  font-size: 14px;
  font-style: normal;
  font-weight: 380;
  line-height: normal;

  position: absolute;
  right: 170px;
  top: 13px;
}

.slide2-demo-card-heading-more-btn {
  width: 120px;
  height: 28px;
  background: linear-gradient(180deg, #1a1a1a 0%, #252525 100%);
  box-shadow: 0px 0px 4px 0px rgba(0, 189, 121, 0.62);

  border: 2px solid;
  border-image: linear-gradient(90deg, rgba(0, 189, 121, 1), rgba(20, 180, 199, 1)) 2 2;

  position: absolute;
  right: 0;
  margin: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.slide2-demo-card-content {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  background: #363636;
}

.chatbox-message-wrapper {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.chatbox-message-wrapper.sent {
  justify-content: flex-end;
}

.chatbox-message-wrapper.received {
  justify-content: flex-start;
}

.chatbox-message-item-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.chatbox-message-item {
  max-width: 80%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  line-height: 1.25;
  position: relative;
  word-wrap: break-word;
}

.chatbox-message-item.sent {
  background: #00bd79;
  color: white;
  border-radius: 8px;
}

.chatbox-message-item.received {
  background: white;
  border-radius: 8px;
  box-shadow: 0.25rem 0.25rem 1.5rem rgba(0, 0, 0, 0.05);
}

.chatbox-message-item-time {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.5rem;
  font-size: 0.75rem;
  color: #888;
}

.chatbox-message-no-message {
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  padding: 1rem;
  color: #888;
}

.slide2-demo-card-input {
  display: flex;
  align-items: center;
  background: #363636;
  min-height: 56px;
  border-radius: 8px;
}
.slide2-demo-card-input textarea {
  flex: 1;
  resize: none;
  padding: 0.5rem;
  border-radius: 8px;
  padding-right: 80px;
  font-size: inherit;
  font-family: inherit;
  line-height: 1.25;
  overflow-y: auto;

  /* background: none; 移除背景 */
  outline: none; /* 在聚焦时移除轮廓 */
  padding: 0; /* 移除内边距 */
  margin: 0; /* 移除外边距 */
  box-shadow: none; /* 移除阴影 */
  font-family: inherit; /* 继承字体 */
  font-size: inherit; /* 继承字体大小 */
  color: inherit; /* 继承字体颜色 */

  padding: 12px 18px;
  margin: 12px;
}
.slide2-demo-card-input-submit {
  position: absolute;
  z-index: 3;
  right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
