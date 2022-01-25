<template>
	<div id="wallet" class="wallet">
		<div class="wallet_list">
			<div class="top">
				<h2>총 보유 금액</h2>
				<div>
					<div>
						<span>WT</span>
						<p>54,000,500</p>
						<a href="javascript:"><img src="../assets/common/ico-16-refresh-w.svg" alt="새로고침" /></a>
					</div>
					<p>KRW 54,000,500</p>
				</div>
			</div>
			<div class="list swiper">
				<ul class="swiper-wrapper">
					<li class="swiper-slide">
						<div class="qr">
							<p class="img"><img src="../assets/common/qr.svg" alt="qr" /></p>
							<p class="txt">3Ddfex34tDF33ddjTc.</p>
						</div>
						<div class="card">
							<div class="top">
								<p>내 꿈이닷! <span>(신한 123-546-345)</span></p>
								<router-link to="/wallet-viewitem"><img src="../assets/common/ico-24-settings.svg" alt="설정" /></router-link>
							</div>
							<div class="money">
								<div>
									<span>WT</span>
									<p>54,000,500</p>
									<a href="javascript:"><img src="../assets/common/ico-16-refresh.svg" alt="새로고침" /></a>
								</div>
								<p>KRW 54,000,500</p>
							</div>
							<ul>
								<li><a href="javascript:"><img src="../assets/common/ico-16-upload.svg" alt="보내기" /><span>보내기</span></a></li>
								<li><a href="javascript:"><img src="../assets/common/ico-16-download.svg" alt="받기" /><span>받기</span></a></li>
							</ul>
						</div>
					</li>

					<li class="swiper-slide">
						<div class="qr">
							<p class="img"><img src="../assets/common/qr.svg" alt="qr" /></p>
							<p class="txt">3Ddfex34tDF33ddjTc.</p>
						</div>
						<div class="card">
							<div class="top">
								<p>내 꿈이닷! <span>(신한 123-546-345)</span></p>
								<router-link to="/wallet-viewitem"><img src="../assets/common/ico-24-settings.svg" alt="설정" /></router-link>
							</div>
							<div class="money">
								<div>
									<span>WT</span>
									<p>54,000,500</p>
									<a href="javascript:"><img src="../assets/common/ico-16-refresh.svg" alt="새로고침" /></a>
								</div>
								<p>KRW 54,000,500</p>
							</div>
							<ul>
								<li><a href="javascript:"><img src="../assets/common/ico-16-upload.svg" alt="보내기" /><span>보내기</span></a></li>
								<li><a href="javascript:"><img src="../assets/common/ico-16-download.svg" alt="받기" /><span>받기</span></a></li>
							</ul>
						</div>
					</li>

					<li class="swiper-slide">
						<div class="add_card">
							<router-link to="/wallet-make">
								<p><img src="../assets/common/btn-add.svg" alt="추가" /></p>
								<p>지갑에 사용하는 계좌를 <br>추가할 수 있습니다.</p>
							</router-link>
							<a href="javascript:"><img src="../assets/common/ico-24-settings.svg" alt="설정" /></a>
						</div>
					</li>
				</ul>
				<div class="swiper-pagination"></div>
			</div>
		</div>

		<div class="menu_list">
			<ul>
				<li>
					<!--<router-link to="./wallet-list">-->
					<a href="javascript:">
						<div>
							<p><img src="../assets/common/ico-24-paper.svg" alt="이용 내역" /><span>이용 내역</span></p>
							<p><img src="../assets/common/ico-22-arrow.svg" alt="이동" /></p>
						</div>
					</a>
				</li>
				<li>
					<a href="javascript:">
						<div>
							<p><img src="../assets/common/ico-24-webcam.svg" alt="부가 서비스" /><span>부가 서비스</span></p>
							<p><img src="../assets/common/ico-22-arrow.svg" alt="이동" /></p>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		Movemove() {
			this.$router.push('/join');
		}
	},
	mounted() {
		var swiper = new Swiper(".swiper", {
			slidesPerView: "auto",
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},			  
		});
	}
}
</script>