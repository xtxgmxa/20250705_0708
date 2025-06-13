const { createApp } = Vue;

createApp({
  data() {
    return {
      currentDay: 0,
      currentTime: new Date(),
      tripData: {
        title: "2025香港品勢公開賽行程<br>7/5 - 7/8",
        date: "Design By BillHuang",
        flights: {
          departure: {
            date: "7/5（六）",
            airline: "國泰航空",
            flightNumber: "CX407",
            departureTime: "08:00",
            departureCity: "台北桃園",
            arrivalTime: "10:05",
            arrivalCity: "香港",
            duration: "約2小時5分鐘",
          },
          return: {
            date: "7/8（二）",
            airline: "國泰航空",
            flightNumber: "CX402",
            departureTime: "18:15",
            departureCity: "香港",
            arrivalTime: "20:05",
            arrivalCity: "台北桃園",
            duration: "約1小時50分鐘",
          },
        },
        days: [
          {
            date: "7/5（六）",
            dateObj: new Date(2025, 6, 5), // 注意：月份是從0開始的，所以7月是6
            title: "第1天",
            theme: "抵港→飯店→逛街輕鬆走",
            activities: [
              {
                time: "10:05",
                timeObj: { hour: 10, minute: 5 },
                title: "抵達香港機場",
                location: "香港國際機場",
                icon: "fas fa-plane-arrival",
                notes: "國泰 CX407",
              },
              {
                time: "10:45",
                timeObj: { hour: 10, minute: 45 },
                title: "包車接送到飯店",
                location: "香港國際機場 → 麗豪酒店 (沙田)",
                duration: "約 40 分鐘",
                icon: "fas fa-shuttle-van",
                notes: "建議 8 人共乘包車",
              },
              {
                time: "11:30",
                timeObj: { hour: 11, minute: 30 },
                title: "辦理入住、稍作休息",
                location: "麗豪酒店",
                duration: "約 1 小時",
                icon: "fas fa-hotel",
                notes: "提前寄放行李可",
              },
              {
                time: "12:30",
                timeObj: { hour: 12, minute: 30 },
                title: "午餐、逛街、輕鬆放鬆",
                location: "沙田新城市廣場",
                duration: "逛 2～3 小時，可晚餐",
                icon: "fas fa-shopping-bag",
                notes: "步行 or 的士10分",
              },
              {
                time: "13:30~18:00",
                timeObj: { hour: 13, minute: 30 },
                endTimeObj: { hour: 18, minute: 0 },
                title: "過磅＆賽前準備",
                location: "飯店內活動／主辦單位通知",
                icon: "fas fa-weight",
                notes: "預計可能沒有安排",
              },
              {
                time: "19:00",
                timeObj: { hour: 19, minute: 0 },
                title: "自由活動／飯店休息",
                location: "麗豪酒店或附近便利商店",
                icon: "fas fa-bed",
                notes: "若孩子不累也可在附近公園走走",
              },
            ],
            dayNote: "沙田新城市廣場內有 Lego Store、玩具反斗城、Donki、大型美食街與親子互動區，孩子放電又安全。",
          },
          {
            date: "7/6（日）",
            dateObj: new Date(2025, 6, 6),
            title: "第2天",
            theme: "跆拳道品勢公開賽＋夜景輕鬆遊",
            activities: [
              {
                time: "08:00",
                timeObj: { hour: 8, minute: 0 },
                title: "早餐、出發至比賽會場",
                location: "主辦單位安排",
                icon: "fas fa-utensils",
                notes: "主力是比賽日",
              },
              {
                time: "08:30～17:00",
                timeObj: { hour: 8, minute: 30 },
                endTimeObj: { hour: 17, minute: 0 },
                title: "全日比賽行程",
                location: "詳細由主辦單位安排",
                icon: "fas fa-trophy",
                notes: "依賽程休息安排調整",
              },
              {
                time: "17:30",
                timeObj: { hour: 17, minute: 30 },
                title: "回飯店稍作休息",
                location: "麗豪酒店",
                duration: "約 30 分鐘",
                icon: "fas fa-hotel",
              },
              {
                time: "18:30",
                timeObj: { hour: 18, minute: 30 },
                title: "晚餐＆星光大道散步",
                location: "搭地鐵至「尖沙咀站」",
                duration: "車程約 35 分鐘",
                icon: "fas fa-star",
                notes: "建議吃晚餐→海邊散步看燈光秀",
              },
              {
                time: "20:00",
                timeObj: { hour: 20, minute: 0 },
                title: "幻彩詠香江燈光秀",
                location: "維港海濱（免費）",
                duration: "約 15 分鐘",
                icon: "fas fa-lightbulb",
                notes: "每晚 8 點",
              },
              {
                time: "21:00",
                timeObj: { hour: 21, minute: 0 },
                title: "回飯店休息",
                location: "地鐵「尖沙咀站 → 沙田站」",
                duration: "車程約 35 分鐘",
                icon: "fas fa-subway",
                notes: "結束舒適行程",
              },
            ],
            dayNote: "星光大道改建後有遮雨棚、平坦步道，有林青霞、成龍雕像。",
          },
          {
            date: "7/7（一）",
            dateObj: new Date(2025, 6, 7),
            title: "第3天",
            theme: "迪士尼全日遊（主打日）",
            activities: [
              {
                time: "07:30",
                timeObj: { hour: 7, minute: 30 },
                title: "飯店早餐＋準備出發",
                location: "麗豪酒店 → 迪士尼",
                duration: "地鐵轉乘約 1 小時",
                icon: "fas fa-utensils",
                notes: "沙田站→南昌轉乘→迪士尼站",
              },
              {
                time: "09:00",
                timeObj: { hour: 9, minute: 0 },
                title: "入園排隊、開園前拍照",
                location: "香港迪士尼樂園",
                icon: "fas fa-camera",
                notes: "提前下載迪士尼 App 做行程規劃",
              },
              {
                time: "09:30～17:00",
                timeObj: { hour: 9, minute: 30 },
                endTimeObj: { hour: 17, minute: 0 },
                title: "全日樂園活動",
                location: "迪士尼各區域",
                duration: "玩 6～8 個設施",
                icon: "fas fa-magic",
                notes: "推薦小小世界、迷離莊園、小飛象、小熊維尼、森林河流之旅",
              },
              {
                time: "17:00～18:30",
                timeObj: { hour: 17, minute: 0 },
                endTimeObj: { hour: 18, minute: 30 },
                title: "購物區＆晚餐",
                location: "迪士尼小鎮內",
                icon: "fas fa-shopping-bag",
                notes: "可買紀念品與吃飯",
              },
              {
                time: "19:00",
                timeObj: { hour: 19, minute: 0 },
                title: "觀賞夜間表演（煙火、水舞）",
                location: "迪士尼城堡區",
                duration: "約 20 分鐘",
                icon: "fas fa-fire",
                notes: "若小孩體力許可",
              },
              {
                time: "20:00",
                timeObj: { hour: 20, minute: 0 },
                title: "回飯店休息",
                location: "迪士尼站 → 沙田站",
                duration: "約 1 小時",
                icon: "fas fa-subway",
                notes: "可沿途休息坐著睡覺",
              },
            ],
            dayNote:
              "若怕小朋友累，可事先選定重點設施，且讓兩個家庭分組移動，各自安排集合時間，如果沒有特殊狀況盡量集體行動。",
          },
          {
            date: "7/8（二）",
            dateObj: new Date(2025, 6, 8),
            title: "第4天",
            theme: "上午海濱摩天輪→下午機場返台",
            activities: [
              {
                time: "08:30",
                timeObj: { hour: 8, minute: 30 },
                title: "早餐＋退房寄放行李",
                location: "麗豪酒店",
                icon: "fas fa-utensils",
                notes: "行李可寄櫃台",
              },
              {
                time: "09:30",
                timeObj: { hour: 9, minute: 30 },
                title: "出發至中環碼頭海濱",
                location: "沙田站 → 中環站",
                duration: "地鐵約 35 分鐘",
                icon: "fas fa-subway",
                notes: "轉乘距離短，步行也好走",
              },
              {
                time: "10:15～11:30",
                timeObj: { hour: 10, minute: 15 },
                endTimeObj: { hour: 11, minute: 30 },
                title: "搭摩天輪、港邊散步",
                location: "中環海濱摩天輪",
                duration: "摩天輪約 15 分鐘",
                icon: "fas fa-circle-notch",
                notes: "拍照、吃小點心",
              },
              {
                time: "11:30",
                timeObj: { hour: 11, minute: 30 },
                title: "回飯店拿行李",
                location: "中環 → 沙田",
                duration: "約 40 分鐘",
                icon: "fas fa-suitcase",
              },
              {
                time: "13:00",
                timeObj: { hour: 13, minute: 0 },
                title: "包車前往機場",
                location: "沙田 → 香港機場",
                duration: "約 45 分鐘",
                icon: "fas fa-shuttle-van",
                notes: "避免地鐵拉車趕行李",
              },
              {
                time: "14:00",
                timeObj: { hour: 14, minute: 0 },
                title: "抵達機場辦理登機",
                location: "香港機場",
                icon: "fas fa-check-circle",
                notes: "建議提早 2 小時辦理",
              },
              {
                time: "18:15～20:05",
                timeObj: { hour: 18, minute: 15 },
                endTimeObj: { hour: 20, minute: 5 },
                title: "回程返台",
                location: "國泰航空",
                icon: "fas fa-plane-departure",
                notes: "國泰 CX402",
              },
            ],
            dayNote: "摩天輪為香港新地標，小朋友會喜歡，且步道平整、餐車多，適合結尾的親子行程。",
          },
        ],
        tools: [
          {
            name: "MTR Mobile",
            description: "港鐵官方 App，查地鐵站轉乘＋時間",
            icon: "fas fa-subway",
          },
          {
            name: "八達通卡",
            description: "全員購買，小孩版八達通也可退卡",
            icon: "fas fa-credit-card",
          },
          {
            name: "天文台 App",
            description: "可查每小時降雨機率，夏季必備",
            icon: "fas fa-cloud-rain",
          },
          {
            name: "Disneyland HK App",
            description: "查排隊時間、餐廳、設施即時動態",
            icon: "fas fa-hat-wizard",
          },
        ],
      },
    }
  },
  created() {
    // 自動選擇當天日期頁籤
    this.selectCurrentDay();

    // 每分鐘更新一次當前時間
    this.updateCurrentTime();
    setInterval(this.updateCurrentTime, 60000);
  },
  methods: {
    selectCurrentDay() {
      const today = new Date();
      
      // 檢查今天是否在行程日期範圍內
      for (let i = 0; i < this.tripData.days.length; i++) {
        // 從日期字符串中提取日期
        const dateStr = this.tripData.days[i].date;
        const day = parseInt(dateStr.substring(2, 4)); // 提取日期部分
        const month = 7; // 7月
        const year = 2025; // 2025年
        
        // 創建日期對象
        const tripDate = new Date(year, month - 1, day);
        
        // 如果今天日期與行程日期相同，則選擇該頁籤
        if (
          today.getFullYear() === tripDate.getFullYear() &&
          today.getMonth() === tripDate.getMonth() &&
          today.getDate() === tripDate.getDate()
        ) {
          this.currentDay = i;
          break;
        }
      }
    },
    updateCurrentTime() {
      this.currentTime = new Date();
    },
    isCurrentActivity(activity) {
      // 從活動時間字符串中提取時間
      const timeStr = activity.time;
      let startHour, startMinute, endHour, endMinute;
      
      // 處理有範圍的時間 (例如 "13:30~18:00")
      if (timeStr.includes("~")) {
        const times = timeStr.split("~");
        const startTime = times[0].trim().split(":");
        const endTime = times[1].trim().split(":");
        
        startHour = parseInt(startTime[0]);
        startMinute = parseInt(startTime[1]);
        endHour = parseInt(endTime[0]);
        endMinute = parseInt(endTime[1]);
      } else {
        // 處理單一時間點 (例如 "10:05")
        const time = timeStr.split(":");
        startHour = parseInt(time[0]);
        startMinute = parseInt(time[1]);
        
        // 如果沒有結束時間，假設活動持續1小時
        endHour = startHour + 1;
        endMinute = startMinute;
      }
      
      // 獲取當前時間
      const currentHour = this.currentTime.getHours();
      const currentMinute = this.currentTime.getMinutes();
      
      // 檢查當前時間是否在活動時間範圍內
      const currentTimeValue = currentHour * 60 + currentMinute;
      const startTimeValue = startHour * 60 + startMinute;
      const endTimeValue = endHour * 60 + endMinute;
      
      return currentTimeValue >= startTimeValue && currentTimeValue <= endTimeValue;
    }
  }
}).mount("#app");