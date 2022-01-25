<template>
	<div id="home">
		<div id="banner" class="swiper swiper_01">
			<ul class="swiper-wrapper">
				<li class="swiper-slide banner_01">
					<div>
						<h2>원하고에 참여하고 <br /><em>누구나 보상받으세요</em></h2>
						<p>회원가입도 앱 설치도 필요없이 <br />미션에 참여하는 누구나 보상을 드립니다!</p>
						<ul>
							<li><a href="javascript:">자세히보기</a></li>
							<li><a href="javascript:">시작하기</a></li>
						</ul>
					</div>
				</li>
			</ul>
			<div class="swiper-button-prev"><img src="../assets/common/ico-24-prev.svg" alt="이전" /></div>
			<div class="swiper-button-next"><img src="../assets/common/ico-24-next.svg" alt="다음" /></div>
		</div>

		<div class="inner">
			<div class="top">
				<div class="left">
					<div class="title">
						<h3>UPCOMING</h3><span>#곧나와요!</span>
						<a href="javascript:">더보기</a>
					</div>
					<div class="list scroll_area">
						<ol>
							<li>
								<router-link to="/detail">
									<div class="thumb">
										<img src="../assets/data/img-list-192-01.jpg" alt="썸네일" />
										<span class="no">NO.1</span>
										<span class="live"><img src="../assets/common/ico-18-live.svg" alt="라이브" />LIVE</span>
										<span class="mark"><img src="../assets/common/xbox.png" alt="XBOX" /></span>
									</div>
									<div class="subject">
										<p>제주여행 공공 플랫폼 탐나오를 탐색해주세요!</p>
										<div>
											<p>2022.01.24-02.24</p>
											<a href="javascript:" class="btn_favorite"><img src="../assets/common/ico-24-like.svg" alt="관심" /><span>1</span></a>
											<a href="javascript:" class="btn_info"><img src="../assets/common/ico-20-info.svg" alt="정보" /></a>
										</div>
									</div>
									<div class="price">
										<dl>
											<dt><img src="../assets/common/ico-20-reward.svg" alt="총보상액" /><span>총보상액</span></dt>
											<dd>0.044 ETH</dd>
											<dd class="sub">190,292원</dd>
										</dl>
									</div>
								</router-link>
							</li>

							<li>
								<router-link to="/detail">
									<div class="thumb">
										<img src="../assets/data/img-list-192-02.jpg" alt="썸네일" />
										<span class="no">NO.2</span>
										<span class="live"><img src="../assets/common/ico-18-live.svg" alt="라이브" />LIVE</span>
										<span class="mark"><img src="../assets/common/xbox.png" alt="XBOX" /></span>
									</div>
									<div class="subject">
										<p>제주여행 공공 플랫폼 탐나오를 탐색해주세요!</p>
										<div>
											<p>2022.01.24-02.24</p>
											<a href="javascript:" class="btn_favorite"><img src="../assets/common/ico-24-like.svg" alt="관심" /><span>1</span></a>
											<a href="javascript:" class="btn_info"><img src="../assets/common/ico-20-info.svg" alt="정보" /></a>
										</div>
									</div>
									<div class="price">
										<dl>
											<dt><img src="../assets/common/ico-20-gift.svg" alt="경품" /><span>경품</span></dt>
											<dd>스타벅스 기프티콘</dd>
										</dl>
									</div>
								</router-link>
							</li>

							<li>
								<router-link to="/detail">
									<div class="thumb">
										<img src="../assets/data/img-list-192-03.jpg" alt="썸네일" />
										<span class="no">NO.3</span>
										<span class="live"><img src="../assets/common/ico-18-live.svg" alt="라이브" />LIVE</span>
										<span class="mark"><img src="../assets/common/xbox.png" alt="XBOX" /></span>
									</div>
									<div class="subject">
										<p>제주여행 공공 플랫폼 탐나오를 탐색해주세요!</p>
										<div>
											<p>2022.01.24-02.24</p>
											<a href="javascript:" class="btn_favorite"><img src="../assets/common/ico-24-like.svg" alt="관심" /><span>1</span></a>
											<a href="javascript:" class="btn_info"><img src="../assets/common/ico-20-info.svg" alt="정보" /></a>
										</div>
									</div>
									<div class="price">
										<dl>
											<dt><img src="../assets/common/ico-20-discount.svg" alt="할인판매" /><span>할인판매</span></dt>
											<dd class="discount">390,292</dd>
											<dd>190,292원</dd>
										</dl>
									</div>
								</router-link>
							</li>
						</ol>
					</div>
				</div>

				<div class="right">
					<div class="title">
						<h3><em class="blue">딱 하루</em> 남았어요!</h3>
					</div>
					<div class="list swiper swiper_02">
						<div class="swiper-pagination"></div>
						<ul class="swiper-wrapper">
							<li class="swiper-slide">
								<router-link to="/detail">
									<div class="thumb">
										<img src="../assets/data/img-list-192-04.jpg" alt="썸네일" />
										<span class="no dday">D-1</span>
										<span class="live"><img src="../assets/common/ico-18-live.svg" alt="라이브" />LIVE</span>
										<span class="mark"><img src="../assets/common/xbox.png" alt="XBOX" /></span>
									</div>
									<div class="subject">
										<p>제주여행 공공 플랫폼 탐나오를 탐색해주세요!</p>
										<div>
											<p>2022.01.24-02.24</p>
											<a href="javascript:" class="btn_favorite"><img src="../assets/common/ico-24-like.svg" alt="관심" /><span>1</span></a>
											<a href="javascript:" class="btn_info"><img src="../assets/common/ico-20-info.svg" alt="정보" /></a>
										</div>
									</div>
									<div class="price">
										<dl>
											<dt><img src="../assets/common/ico-20-reward.svg" alt="총보상액" /><span>1인당 보상액</span></dt>
											<dd>0.044 ETH</dd>
											<dd class="sub">190,292원</dd>
										</dl>
									</div>
								</router-link>
							</li>

							<li class="swiper-slide">
								<router-link to="/detail">
									<div class="thumb">
										<img src="../assets/data/img-list-192-01.jpg" alt="썸네일" />
										<span class="no dday">D-1</span>
										<span class="live"><img src="../assets/common/ico-18-live.svg" alt="라이브" />LIVE</span>
										<span class="mark"><img src="../assets/common/xbox.png" alt="XBOX" /></span>
									</div>
									<div class="subject">
										<p>제주여행 공공 플랫폼 탐나오를 탐색해주세요!</p>
										<div>
											<p>2022.01.24-02.24</p>
											<a href="javascript:" class="btn_favorite"><img src="../assets/common/ico-24-like.svg" alt="관심" /><span>1</span></a>
											<a href="javascript:" class="btn_info"><img src="../assets/common/ico-20-info.svg" alt="정보" /></a>
										</div>
									</div>
									<div class="price">
										<dl>
											<dt><img src="../assets/common/ico-20-reward.svg" alt="총보상액" /><span>1인당 보상액</span></dt>
											<dd>0.044 ETH</dd>
											<dd class="sub">190,292원</dd>
										</dl>
									</div>
								</router-link>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="bottom">
				<div class="left">
					<div class="title">
						<h3>TOP REWARD</h3><span>#이렇게나많이?</span>
						<p class="btn_refresh"><span>2022.01.24 15:32 기준</span><a href="javascript:"><img src="../assets/common/ico-16-refresh.svg" alt="새로고침" /></a></p>
					</div>
					<div class="list scroll_area">
						<ol>
							<li>
								<router-link to="/detail">
									<div class="thumb">
										<span><img src="../assets/common/ico-56-award-1.svg" alt="1위" /></span>
										<img src="../assets/data/img-list-142-01.jpg" alt="썸네일" />
									</div>
									<div class="text">
										<p>제주여행 공공 플랫폼 탐나오를 탐색해주세요!</p>
										<dl>
											<dt><img src="../assets/common/ico-20-reward.svg" alt="금액" /><span>0.044 ETH</span></dt>
											<dd>2,190,292원</dd>
										</dl>
									</div>
								</router-link>
							</li>
							<li>
								<router-link to="/detail">
									<div class="thumb">
										<span><img src="../assets/common/ico-56-award-2.svg" alt="2위" /></span>
										<img src="../assets/data/img-list-142-02.jpg" alt="썸네일" />
									</div>
									<div class="text">
										<p>제주여행 공공 플랫폼 탐나오를 탐색해주세요!</p>
										<dl>
											<dt><img src="../assets/common/ico-20-reward.svg" alt="금액" /><span>0.044 ETH</span></dt>
											<dd>2,190,292원</dd>
										</dl>
									</div>
								</router-link>
							</li>
							<li>
								<router-link to="/detail">
									<div class="thumb">
										<span><img src="../assets/common/ico-56-award-3.svg" alt="3위" /></span>
										<img src="../assets/data/img-list-142-03.jpg" alt="썸네일" />
									</div>
									<div class="text">
										<p>제주여행 공공 플랫폼 탐나오를 탐색해주세요!</p>
										<dl>
											<dt><img src="../assets/common/ico-20-reward.svg" alt="금액" /><span>0.044 ETH</span></dt>
											<dd>2,190,292원</dd>
										</dl>
									</div>
								</router-link>
							</li>
							<li>
								<router-link to="/detail">
									<div class="thumb">
										<img src="../assets/data/img-list-142-04.jpg" alt="썸네일" />
									</div>
									<div class="text">
										<p>제주여행 공공 플랫폼 탐나오를 탐색해주세요!</p>
										<dl>
											<dt><img src="../assets/common/ico-20-reward.svg" alt="금액" /><span>0.044 ETH</span></dt>
											<dd>2,190,292원</dd>
										</dl>
									</div>
								</router-link>
							</li>
							<li>
								<router-link to="/detail">
									<div class="thumb">
										<img src="../assets/data/img-list-142-05.jpg" alt="썸네일" />
									</div>
									<div class="text">
										<p>제주여행 공공 플랫폼 탐나오를 탐색해주세요!</p>
										<dl>
											<dt><img src="../assets/common/ico-20-reward.svg" alt="금액" /><span>0.044 ETH</span></dt>
											<dd>2,190,292원</dd>
										</dl>
									</div>
								</router-link>
							</li>
							<li>
								<router-link to="/detail">
									<div class="thumb">
										<img src="../assets/data/img-list-142-06.jpg" alt="썸네일" />
									</div>
									<div class="text">
										<p>제주여행 공공 플랫폼 탐나오를 탐색해주세요!</p>
										<dl>
											<dt><img src="../assets/common/ico-20-reward.svg" alt="금액" /><span>0.044 ETH</span></dt>
											<dd>2,190,292원</dd>
										</dl>
									</div>
								</router-link>
							</li>
							<li>
								<router-link to="/detail">
									<div class="thumb">
										<img src="../assets/data/img-list-142-07.jpg" alt="썸네일" />
									</div>
									<div class="text">
										<p>제주여행 공공 플랫폼 탐나오를 탐색해주세요!</p>
										<dl>
											<dt><img src="../assets/common/ico-20-reward.svg" alt="금액" /><span>0.044 ETH</span></dt>
											<dd>2,190,292원</dd>
										</dl>
									</div>
								</router-link>
							</li>
							<li>
								<router-link to="/detail">
									<div class="thumb">
										<img src="../assets/data/img-list-142-08.jpg" alt="썸네일" />
									</div>
									<div class="text">
										<p>제주여행 공공 플랫폼 탐나오를 탐색해주세요!</p>
										<dl>
											<dt><img src="../assets/common/ico-20-reward.svg" alt="금액" /><span>0.044 ETH</span></dt>
											<dd>2,190,292원</dd>
										</dl>
									</div>
								</router-link>
							</li>
						</ol>
					</div>
				</div>

				<div class="right">
					<div class="title">
						<h3>RANKING</h3><span>#누가얼마를벌까?</span>
					</div>
					<div class="list">
						<ol>
							<li>
								<a href="javascript:">
									<div class="info">
										<p class="no">1</p>
										<p class="thumb"><img src="../assets/data/mem-photo-01.jpg" alt="썸네일" /></p>
										<dl>
											<dt>victory_happy</dt>
											<dd>참여이벤트 수 : 502개</dd>
										</dl>
									</div>
									<dl>
										<dt>총 보상받은 금액</dt>
										<dd>10,190,292원</dd>
									</dl>
								</a>
							</li>
							<li>
								<a href="javascript:">
									<div class="info">
										<p class="no">2</p>
										<p class="thumb"><img src="../assets/data/mem-photo-02.jpg" alt="썸네일" /></p>
										<dl>
											<dt>victory_happy</dt>
											<dd>참여이벤트 수 : 502개</dd>
										</dl>
									</div>
									<dl>
										<dt>총 보상받은 금액</dt>
										<dd>10,190,292원</dd>
									</dl>
								</a>
							</li>
							<li>
								<a href="javascript:">
									<div class="info">
										<p class="no">3</p>
										<p class="thumb"><img src="../assets/data/mem-photo-03.jpg" alt="썸네일" /></p>
										<dl>
											<dt>victory_happy</dt>
											<dd>참여이벤트 수 : 502개</dd>
										</dl>
									</div>
									<dl>
										<dt>총 보상받은 금액</dt>
										<dd>10,190,292원</dd>
									</dl>
								</a>
							</li>
							<li>
								<a href="javascript:">
									<div class="info">
										<p class="no">4</p>
										<p class="thumb"><img src="../assets/data/mem-photo-04.jpg" alt="썸네일" /></p>
										<dl>
											<dt>victory_happy</dt>
											<dd>참여이벤트 수 : 502개</dd>
										</dl>
									</div>
									<dl>
										<dt>총 보상받은 금액</dt>
										<dd>10,190,292원</dd>
									</dl>
								</a>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		var swiper_01 = new Swiper(".swiper_01", {
			loop: true,
			autoplay: {
   				delay: 4000,
				disableOnInteraction: false,				   
 			},
			navigation: {
    			nextEl: '.swiper-button-next',
    			prevEl: '.swiper-button-prev',
  			},	  
		});

		var swiper_02 = new Swiper(".swiper_02", {
			loop: true,
			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
 			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},			  
			on: {
				init: function () {
				document.querySelector(".top .right").prepend(document.querySelector(".swiper-pagination"));
				},
			},
		});
		
		if (window.NodeList && !NodeList.prototype.forEach) {
			NodeList.prototype.forEach = Array.prototype.forEach;
		}

		const sliders = document.querySelectorAll('.scroll_area');
		function preventClick(e){
			e.preventDefault();
			e.stopImmediatePropagation();
		}
		let isDown = false;
		let isDragged = false;
		let startX;
		let scrollLeft;

		sliders.forEach(function(slider){
			slider.addEventListener("mousedown", function(e){
				isDown = true;
				slider.classList.add("active");
				startX = e.pageX - slider.offsetLeft;
				scrollLeft = slider.scrollLeft;
			});
		});

		sliders.forEach(function(slider){
			slider.addEventListener("mouseleave", function(e){
				isDown = false;
				slider.classList.remove("active");
			});
		});

		sliders.forEach(function(slider){
			slider.addEventListener("mouseup", function(e){
				isDown = false;
				const elements = slider.querySelectorAll("a");
				if(isDragged){
				for(let i = 0; i<elements.length; i++){
					elements[i].addEventListener("click", preventClick);
				}
				}
				else{
				for(let i = 0; i<elements.length; i++){
					elements[i].removeEventListener("click", preventClick);
				}
				}
				slider.classList.remove("active");
				isDragged =  false;
			});
		});

		sliders.forEach(function(slider){
			slider.addEventListener("mousemove", function(e) {
				if (!isDown) return;
				isDragged =  true;
				e.preventDefault();
				const x = e.pageX - slider.offsetLeft;
				const walk = (x - startX) * 2;
				slider.scrollLeft = scrollLeft - walk;
			});
		});		
	}
}
</script>