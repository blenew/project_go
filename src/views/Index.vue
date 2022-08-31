<template>
	<div id="home" class="index">
		<ul id="tab">
			<li><router-link to="/"><img src="../assets/common/ico-30-tab-event.svg">EVENT</router-link></li>
			<li class="on"><router-link to="/"><img src="../assets/common/ico-30-tab-hope-active.svg">희망거래</router-link></li>
		</ul>
		<div id="banner" class="swiper swiper_01">
			<ul class="swiper-wrapper">
				<li class="swiper-slide banner_01">
					<div>
						<h2>원하는 가격으로 <br /><em>구매해 보세요.</em></h2>
						<p>내가 원하는 가격으로 상품을 구매할 수 있어요. <br />원하는 가격을 한번 제시해 보세요.</p>
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
						<h3>NEW 상품</h3><span>#매일매일 새로운 상품이 쏟아집니다!</span>
						<a href="javascript:">더보기</a>
					</div>
					<div class="list product_list scroll_area">
						<ol>
							<li>
								<router-link to="/product">
									<div class="thumb">
										<img src="../assets/data/prd-list-192-01.png" alt="썸네일" />
										<span class="hope"><img src="../assets/common/ico-44-hope.svg" alt="희망거래" /></span>
									</div>
									<div class="txt">
										<p>나이키 덩크 로우 블랙</p>
										<div class="price">
											<p>종료일 : 2022.07.30</p>
											<div>
												<p>3개 남음</p>
												<p><em>190,292</em>원</p>
											</div>
										</div>
									</div>
								</router-link>
							</li>

							<li>
								<router-link to="/product">
									<div class="thumb">
										<img src="../assets/data/prd-list-192-02.png" alt="썸네일" />
										<span class="hope"><img src="../assets/common/ico-44-hope.svg" alt="희망거래" /></span>
									</div>
									<div class="txt">
										<p>애플 에어팟 맥스 스페이스 그레이</p>
										<div class="price">
											<p>종료일 : 2022.07.30</p>
											<div>
												<p>3개 남음</p>
												<p><em>547,000</em>원</p>
											</div>
										</div>
									</div>
								</router-link>
							</li>

							<li>
								<router-link to="/product">
									<div class="thumb">
										<img src="../assets/data/prd-list-192-03.png" alt="썸네일" />
										<span class="hope"><img src="../assets/common/ico-44-hope.svg" alt="희망거래" /></span>
									</div>
									<div class="txt">
										<p>다이슨 에어랩 스타일러 <br>컴플리트 니켈 푸시아</p>
										<div class="price">
											<p>종료일 : 2022.07.30</p>
											<div>
												<p>3개 남음</p>
												<p><em>614,000</em>원</p>
											</div>
										</div>
									</div>
								</router-link>
							</li>
						</ol>
					</div>
				</div>

				<div class="right">
					<div class="title">
						<h3><em class="blue">종료 예정</em> 상품<span>#서두르세요!</span></h3>
					</div>
					<div class="list product_list swiper swiper_02">
						<div class="swiper-pagination"></div>
						<ul class="swiper-wrapper">
							<li class="swiper-slide">
								<router-link to="/detail">
									<div class="thumb">
										<img src="../assets/data/prd-list-192-01.png" alt="썸네일" />
										<span class="no dday">D-1</span>
										<span class="hope"><img src="../assets/common/ico-44-hope.svg" alt="희망거래" /></span>
									</div>
									<div class="txt">
										<p>우영미 화이트 엠브로이드 로고 <br>볼캡 블랙</p>
										<div class="price">
											<p>종료일 : 2022.07.30</p>
											<div>
												<p>3개 남음</p>
												<p><em>614,000</em>원</p>
											</div>
										</div>
									</div>
								</router-link>
							</li>

							<li class="swiper-slide">
								<router-link to="/detail">
									<div class="thumb">
										<img src="../assets/data/prd-list-192-01.png" alt="썸네일" />
										<span class="no dday">D-1</span>
										<span class="hope"><img src="../assets/common/ico-44-hope.svg" alt="희망거래" /></span>
									</div>
									<div class="txt">
										<p>우영미 화이트 엠브로이드 로고 <br>볼캡 블랙</p>
										<div class="price">
											<p>종료일 : 2022.07.30</p>
											<div>
												<p>3개 남음</p>
												<p><em>614,000</em>원</p>
											</div>
										</div>
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
					<div class="list product_list scroll_area">
						<ol>
							<li>
								<router-link to="/product">
									<div class="thumb">
										<img src="../assets/data/prd-list-192-05.png" alt="썸네일" />
										<span class="sale"><img src="../assets/common/ico-20-discount-w.svg" />50%</span>
										<span class="hope"><img src="../assets/common/ico-44-hope.svg" alt="희망거래" /></span>
									</div>
									<div class="txt">
										<p>메종 마르지엘라 키링 지갑 블랙</p>
										<div class="price">
											<div>
												<p>3개 남음</p>
												<p><span>500,000</span><em>250,000</em>원</p>
											</div>
										</div>
									</div>
								</router-link>
							</li>

							<li>
								<router-link to="/product">
									<div class="thumb">
										<img src="../assets/data/prd-list-192-06.png" alt="썸네일" />
										<span class="sale"><img src="../assets/common/ico-20-discount-w.svg" />60%</span>
										<span class="hope"><img src="../assets/common/ico-44-hope.svg" alt="희망거래" /></span>
									</div>
									<div class="txt">
										<p>프라다 여성 선글라스</p>
										<div class="price">
											<div>
												<p>3개 남음</p>
												<p><span>500,000</span><em>250,000</em>원</p>
											</div>
										</div>
									</div>
								</router-link>
							</li>

							<li>
								<router-link to="/product">
									<div class="thumb">
										<img src="../assets/data/prd-list-192-07.png" alt="썸네일" />
										<span class="sale"><img src="../assets/common/ico-20-discount-w.svg" />52%</span>
										<span class="hope"><img src="../assets/common/ico-44-hope.svg" alt="희망거래" /></span>
									</div>
									<div class="txt">
										<p>소니 노이즈캔슬링 헤드폰</p>
										<div class="price">
											<div>
												<p>3개 남음</p>
												<p><span>500,000</span><em>614,000</em>원</p>
											</div>
										</div>
									</div>
								</router-link>
							</li>
						</ol>
					</div>
				</div>

				<div class="right">
					<div class="title">
						<h3>RANKING</h3><span>#당신은 최고의 질러!</span>
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
											<dd>프라다 숏패딩</dd>
										</dl>
									</div>
								</a>
							</li>
							<li>
								<a href="javascript:">
									<div class="info">
										<p class="no">2</p>
										<p class="thumb"><img src="../assets/data/mem-photo-02.jpg" alt="썸네일" /></p>
										<dl>
											<dt>victory_happy</dt>
											<dd>골든구스 로우탑 스니커즈</dd>
										</dl>
									</div>
								</a>
							</li>
							<li>
								<a href="javascript:">
									<div class="info">
										<p class="no">3</p>
										<p class="thumb"><img src="../assets/data/mem-photo-03.jpg" alt="썸네일" /></p>
										<dl>
											<dt>victory_happy</dt>
											<dd>삼성 UHD TV 65인치</dd>
										</dl>
									</div>
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