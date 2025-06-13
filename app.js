const { createApp } = Vue;

createApp({
  data() {
    return {
    currentDay: 0,
    currentTime: new Date(),
    showModal: false,
    currentTool: {},
      tripData: {
        title: "2025香港品勢公開賽行程<br><small class='subtitle'>7/5 - 7/8 Design By BillHuang</small>",
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
            theme: "跆拳道品勢公開賽",
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
            theme: "迪士尼全日遊",
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
                officialLink: "https://www.mtr.com.hk/en/customer/mobile/mtr-mobile.html",
                downloadLink: null,
                guide: `
                  <h4>香港地鐵使用指南</h4>
                  <p>MTR Mobile 是香港地鐵官方應用程式，為首次訪港遊客提供便捷的交通規劃工具。</p>
                  
                  <h4>主要功能：</h4>
                  <ul>
                    <li><strong>路線規劃</strong>：輸入起點和終點，獲取最佳路線建議</li>
                    <li><strong>實時列車資訊</strong>：查看列車到站時間和服務狀態</li>
                    <li><strong>站內設施地圖</strong>：幫助您找到出口、洗手間、商店等</li>
                    <li><strong>票價查詢</strong>：計算不同站點間的車費</li>
                  </ul>
                  
                  <div class="tip">
                    <strong>小貼士：</strong> 香港地鐵非常準時且高效，是遊覽香港最便捷的交通方式。避開早晚高峰時段（7:30-9:30 和 17:30-19:30）可獲得更舒適的乘車體驗。
                  </div>
                  
                  <h4>如何使用香港地鐵：</h4>
                  <ol>
                    <li>購買單程票或八達通卡（推薦使用八達通卡）</li>
                    <li>跟隨站內指示牌前往對應月台</li>
                    <li>注意列車到站時的廣播和電子顯示屏</li>
                    <li>上車時先讓乘客下車，再有序上車</li>
                    <li>到達目的地後，跟隨出口指示離開</li>
                  </ol>
                  
                  <div class="warning">
                    <strong>注意：</strong> 香港地鐵禁止飲食，違者可被罰款。車廂內請保持安靜，並為有需要人士讓座。
                  </div>
                `,
              },
              {
                name: "八達通卡",
                description: "全員購買，小孩版八達通也可退卡",
                icon: "fas fa-credit-card",
                officialLink: "https://www.octopus.com.hk/tc/consumer/index.html",
                downloadLink: null,
                guide: `
                  <h4>八達通卡使用指南</h4>
                  <p>八達通卡是香港最通用的電子支付卡，可用於交通、購物、餐飲等多種場合，是訪港遊客的必備工具。</p>
                  
                  <h4>卡片種類：</h4>
                  <ul>
                    <li><strong>標準八達通</strong>：成人使用，可退還押金</li>
                    <li><strong>小童八達通</strong>：12歲以下兒童使用，享有半價優惠</li>
                    <li><strong>遊客八達通</strong>：特別為遊客設計，有效期內無限次搭乘指定交通工具</li>
                  </ul>
                  
                  <h4>如何購買：</h4>
                  <p>您可以在以下地點購買八達通卡：</p>
                  <ul>
                    <li>機場抵港大堂的顧客服務中心</li>
                    <li>各港鐵站的顧客服務中心</li>
                    <li>便利店（7-11、OK便利店等）</li>
                  </ul>
                  
                  <h4>如何使用：</h4>
                  <p>只需將卡片輕觸讀卡器，無需插入。系統會自動扣除相應費用。</p>
                  
                  <div class="tip">
                    <strong>小貼士：</strong> 八達通卡可以增值（充值）。您可以在便利店、港鐵站或指定的增值機增值，最低增值額為HK$50。
                  </div>
                  
                  <h4>退卡方式：</h4>
                  <p>離開香港前，您可以在機場或港鐵站的顧客服務中心退還八達通卡，並取回押金和剩餘金額（會扣除手續費HK$9）。</p>
                  
                  <div class="warning">
                    <strong>注意：</strong> 請保管好您的八達通卡，遺失不補。卡內餘額不足時將無法使用。
                  </div>
                `,
              },
              {
                name: "天文台 App",
                description: "可查每小時降雨機率，夏季必備",
                icon: "fas fa-cloud-rain",
                officialLink: "https://www.hko.gov.hk/tc/wxinfo/myobservatory.htm",
                downloadLink: null,
                guide: `
                  <h4>香港天文台 App 使用指南</h4>
                  <p>香港夏季多雨且潮濕，天氣變化快速。天文台官方應用程式可幫助您隨時了解天氣狀況，做好出行準備。</p>
                  
                  <h4>主要功能：</h4>
                  <ul>
                    <li><strong>9天天氣預報</strong>：查看未來幾天的天氣趨勢</li>
                    <li><strong>降雨預報</strong>：提供未來兩小時的降雨概率</li>
                    <li><strong>熱帶氣旋資訊</strong>：颱風季節必備</li>
                    <li><strong>天氣警告</strong>：及時發布暴雨、強風等警告信號</li>
                  </ul>
                  
                  <h4>香港天氣特點：</h4>
                  <ul>
                    <li><strong>夏季（6-9月）</strong>：炎熱潮濕，經常有雷暴雨，偶有颱風</li>
                    <li><strong>秋季（10-12月）</strong>：天氣較為穩定，溫和乾燥</li>
                    <li><strong>冬季（1-2月）</strong>：較為涼爽，偶有寒流</li>
                    <li><strong>春季（3-5月）</strong>：溫暖多霧，濕度較高</li>
                  </ul>
                  
                  <div class="tip">
                    <strong>小貼士：</strong> 香港的室內場所（如商場、地鐵、餐廳）通常開很強的冷氣，即使在夏季也建議隨身攜帶一件薄外套。
                  </div>
                  
                  <h4>雨天出行建議：</h4>
                  <p>香港雨天交通擁堵嚴重，建議：</p>
                  <ul>
                    <li>提前出門，預留更多交通時間</li>
                    <li>優先選擇地鐵而非巴士或的士</li>
                    <li>攜帶折疊傘或輕便雨衣</li>
                    <li>穿著防滑鞋履，香港雨天路面較滑</li>
                  </ul>
                `,
              },
              {
                name: "Disneyland HK App",
                description: "查排隊時間、餐廳、設施即時動態",
                icon: "fas fa-hat-wizard",
                officialLink: "https://www.hongkongdisneyland.com/zh-hk/mobile-app/",
                downloadLink: null,
                guide: `
                  <h4>香港迪士尼樂園 App 使用指南</h4>
                  <p>香港迪士尼樂園官方應用程式是遊玩樂園的必備工具，可幫助您規劃行程、查看等候時間，最大化您的遊園體驗。</p>
                  
                  <h4>主要功能：</h4>
                  <ul>
                    <li><strong>實時等候時間</strong>：查看各遊樂設施的排隊情況</li>
                    <li><strong>互動地圖</strong>：輕鬆導航園區</li>
                    <li><strong>表演時間表</strong>：不錯過精彩演出</li>
                    <li><strong>餐廳預約</strong>：提前預訂餐廳，避免排隊</li>
                  </ul>
                  
                  <h4>遊園小貼士：</h4>
                  <ul>
                    <li><strong>早到早玩</strong>：開園時到達，體驗更多設施</li>
                    <li><strong>反向遊園</strong>：從園區後方開始，避開人流</li>
                    <li><strong>用餐錯峰</strong>：避開12:00-13:30的用餐高峰期</li>
                    <li><strong>雨天優勢</strong>：雨天遊客較少，等候時間更短</li>
                  </ul>
                  
                  <div class="tip">
                    <strong>小貼士：</strong> 香港迪士尼較小，一天時間足夠遊玩大部分設施。建議提前在App上查看當天的表演時間，合理安排行程。
                  </div>
                  
                  <h4>推薦設施（適合小朋友）：</h4>
                  <ul>
                    <li>小小世界 (It's a Small World)</li>
                    <li>小熊維尼歷險之旅 (The Many Adventures of Winnie the Pooh)</li>
                    <li>灰熊山谷 (Grizzly Gulch)</li>
                    <li>反斗奇兵大本營 (Toy Story Land)</li>
                    <li>米奇幻想曲 (Mickey's PhilharMagic)</li>
                  </ul>
                  
                  <div class="warning">
                    <strong>注意：</strong> 香港夏季炎熱潮濕，請攜帶防曬用品、水壺和雨具。部分設施有身高限制，請提前查詢。
                  </div>
                `,
              },
              {
                name: "香港交通指南",
                description: "首次訪港必讀交通攻略",
                icon: "fas fa-map-marked-alt",
                officialLink: "https://www.discoverhongkong.com/tc/plan/transportation.html",
                downloadLink:
                  "https://www.discoverhongkong.com/content/dam/dhk/intl/plan/transport/HK-Transport-Guide-tc.pdf",
                guide: `
                  <h4>香港交通綜合指南</h4>
                  <p>香港擁有全球最高效的公共交通系統之一，了解各種交通工具的特點和使用方法，將幫助您更輕鬆地遊覽香港。</p>
                  
                  <h4>主要交通工具：</h4>
                  
                  <h4>1. 港鐵（地鐵）</h4>
                  <p><strong>特點：</strong> 快速、準時、覆蓋範圍廣</p>
                  <p><strong>費用：</strong> 視乎路程，約HK$4-20</p>
                  <p><strong>運行時間：</strong> 06:00-01:00</p>
                  <p><strong>適合：</strong> 大多數市區景點和跨區移動</p>
                  
                  <h4>2. 巴士</h4>
                  <p><strong>特點：</strong> 路線眾多，可達港鐵不覆蓋的地區</p>
                  <p><strong>費用：</strong> 約HK$3-20</p>
                  <p><strong>運行時間：</strong> 因路線而異，主要路線24小時運行</p>
                  <p><strong>適合：</strong> 前往郊區景點或體驗本地生活</p>
                  
                  <h4>3. 小巴</h4>
                  <p><strong>特點：</strong> 分綠色（固定路線）和紅色（彈性路線）</p>
                  <p><strong>費用：</strong> 約HK$3-30</p>
                  <p><strong>運行時間：</strong> 因路線而異</p>
                  <p><strong>適合：</strong> 前往小眾景點或住宅區</p>
                  
                  <h4>4. 電車</h4>
                  <p><strong>特點：</strong> 香港特色交通，僅行駛於港島北部</p>
                  <p><strong>費用：</strong> 固定HK$2.6</p>
                  <p><strong>運行時間：</strong> 06:00-00:00</p>
                  <p><strong>適合：</strong> 短途觀光或體驗懷舊氛圍</p>
                  
                  <h4>5. 的士（計程車）</h4>
                  <p><strong>特點：</strong> 分紅色（市區）、綠色（新界）和藍色（大嶼山）</p>
                  <p><strong>費用：</strong> 起錶HK$24起，視距離而定</p>
                  <p><strong>運行時間：</strong> 24小時</p>
                  <p><strong>適合：</strong> 攜帶大型行李或多人同行時</p>
                  
                  <h4>6. 渡輪</h4>
                  <p><strong>特點：</strong> 連接港島、九龍和離島</p>
                  <p><strong>費用：</strong> 約HK$2-40，視航線而定</p>
                  <p><strong>運行時間：</strong> 因航線而異</p>
                  <p><strong>適合：</strong> 前往離島或欣賞海港風光</p>
                  
                  <div class="tip">
                    <strong>交通規劃建議：</strong> 使用Google地圖或CityMapper應用程式規劃路線，這些應用會綜合考慮各種交通工具，為您提供最佳出行方案。
                  </div>
                  
                  <div class="warning">
                    <strong>注意事項：</strong> 香港交通工具上禁止飲食。搭乘扶手電梯時請「左行右立」。乘坐的士時，請確認司機已開啟計費錶。
                  </div>
                `,
              },
        ],
      },
    }
  },
  created() {
    // 自動選擇當天日期頁籤
    this.selectCurrentDay()

    // 每分鐘更新一次當前時間
    this.updateCurrentTime()
    setInterval(this.updateCurrentTime, 60000)
  },
  methods: {
    selectCurrentDay() {
      const today = new Date()

      // 檢查今天是否在行程日期範圍內
      for (let i = 0; i < this.tripData.days.length; i++) {
        // 從日期字符串中提取日期
        const dateStr = this.tripData.days[i].date
        const day = Number.parseInt(dateStr.substring(2, 4)) // 提取日期部分
        const month = 7 // 7月
        const year = 2025 // 2025年

        // 創建日期對象
        const tripDate = new Date(year, month - 1, day)

        // 如果今天日期與行程日期相同，則選擇該頁籤
        if (
          today.getFullYear() === tripDate.getFullYear() &&
          today.getMonth() === tripDate.getMonth() &&
          today.getDate() === tripDate.getDate()
        ) {
          this.currentDay = i
          break
        }
      }
    },
    updateCurrentTime() {
      this.currentTime = new Date()
    },
    isCurrentActivity(activity) {
      // 從活動時間字符串中提取時間
      const timeStr = activity.time
      let startHour, startMinute, endHour, endMinute

      // 處理有範圍的時間 (例如 "13:30~18:00")
      if (timeStr.includes("~")) {
        const times = timeStr.split("~")
        const startTime = times[0].trim().split(":")
        const endTime = times[1].trim().split(":")

        startHour = Number.parseInt(startTime[0])
        startMinute = Number.parseInt(startTime[1])
        endHour = Number.parseInt(endTime[0])
        endMinute = Number.parseInt(endTime[1])
      } else {
        // 處理單一時間點 (例如 "10:05")
        const time = timeStr.split(":")
        startHour = Number.parseInt(time[0])
        startMinute = Number.parseInt(time[1])

        // 如果沒有結束時間，假設活動持續1小時
        endHour = startHour + 1
        endMinute = startMinute
      }

      // 獲取當前時間
      const currentHour = this.currentTime.getHours()
      const currentMinute = this.currentTime.getMinutes()

      // 檢查當前時間是否在活動時間範圍內
      const currentTimeValue = currentHour * 60 + currentMinute
      const startTimeValue = startHour * 60 + startMinute
      const endTimeValue = endHour * 60 + endMinute

      return currentTimeValue >= startTimeValue && currentTimeValue <= endTimeValue
    },
    showToolGuide(tool) {
      this.currentTool = tool
      this.showModal = true
      document.body.style.overflow = "hidden" // 防止背景滾動
    },
    closeModal() {
      this.showModal = false
      document.body.style.overflow = "" // 恢復背景滾動
    },
  },
}).mount("#app")
