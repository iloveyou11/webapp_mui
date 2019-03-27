mui(".mui-card-footer").on("tap", ".readmore", function(e) {
			mui.openWindow({
				url: 'readmore.html',
				id: 'readmore.html',
				styles: {
					top: 0, //新页面顶部位置
					bottom: 0, //新页面底部位置
				},
				show: {
					autoShow: true, //页面loaded事件发生后自动显示，默认为true
					aniShow: 'slide-in-right', //页面显示动画，默认为”slide-in-right“；
					duration: 100 //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
				}
			})
		});