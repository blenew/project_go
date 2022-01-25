<template>
	<div id="wallet_list" class="wallet">
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

		<div class="contents_wrap">
			<h3><img src="../assets/common/ico-24-paper.svg" alt="이용 내역" /><span>거래 내역보기</span></h3>
			<ul class="contents_tab">
				<li class="active"><a href="javascript:">1개월</a></li>
				<li><a href="javascript:">3개월</a></li>
				<li><a href="javascript:">기간</a></li>
				<li><a href="javascript:">옵션</a></li>
			</ul>
			<p><span>2021.07.10 - 08.10</span><span>최신거래순</span></p>
			<ul class="history">
				<li>
					<dl>
						<dt>홍길동</dt>
						<dd>21.0809.13.14</dd>
					</dl>
					<div>
						<dl>
							<dt>입금 :</dt>
							<dd class="blue">5,000,000 WT</dd>
						</dl>
						<dl>
							<dt>잔금 :</dt>
							<dd>25,000,000 WT</dd>
						</dl>
					</div>
				</li>
				<li>
					<dl>
						<dt>홍길동</dt>
						<dd>21.0809.13.14</dd>
					</dl>
					<div>
						<dl>
							<dt>출금 :</dt>
							<dd class="red">5,000,000 WT</dd>
						</dl>
						<dl>
							<dt>잔금 :</dt>
							<dd>25,000,000 WT</dd>
						</dl>
					</div>
				</li>
				<li>
					<dl>
						<dt>홍길동</dt>
						<dd>21.0809.13.14</dd>
					</dl>
					<div>
						<dl>
							<dt>입금 :</dt>
							<dd class="blue">5,000,000 WT</dd>
						</dl>
						<dl>
							<dt>잔금 :</dt>
							<dd>25,000,000 WT</dd>
						</dl>
					</div>
				</li>
				<li>
					<dl>
						<dt>홍길동</dt>
						<dd>21.0809.13.14</dd>
					</dl>
					<div>
						<dl>
							<dt>출금 :</dt>
							<dd class="red">5,000,000 WT</dd>
						</dl>
						<dl>
							<dt>잔금 :</dt>
							<dd>25,000,000 WT</dd>
						</dl>
					</div>
				</li>				
			</ul>
		</div>
	</div>
</template>

<script>
export default {
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