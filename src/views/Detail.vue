<template>
	<div id="detail">
		<p><a href="javascript:" @click="$router.go(-1)"><img src="../assets/common/ico-22-back.svg" alt="목록으로 돌아가기" /><span>목록으로 돌아가기</span></a></p>
		<div>
			<div class="left">
				<div class="top">
					<h2><span>원하고 <br /><em>오늘 바로 보상받으세요</em></span><img src="../assets/common/img-reward.svg" alt="보상" /></h2>
					<div class="title">
						<ul class="thumb">
							<li><img src="../assets/data/mem-photo-01.jpg" alt="썸네일" /></li>
							<li><img src="../assets/data/mem-photo-02.jpg" alt="썸네일" /></li>
							<li><img src="../assets/data/mem-photo-03.jpg" alt="썸네일" /></li>
						</ul>
						<p><em>1,157</em>명 참여</p>
						<a href="javascript:" :class="{ active: showShare }" @click="showShare = !showShare"><img src="../assets/common/ico-24-share.svg" alt="공유" /></a>
						<transition name="fade">
							<div v-if="showShare" class="share">
								<div>
									<p>Copy Link</p>
									<span>http://skjgdsaidjgsadjgkasdg</span>
								</div>
								<div>
									<p>Share</p>
									<ul>
										<li><a href="javascript:"><img src="../assets/common/share-01.png" alt="카카오톡"></a></li>
										<li><a href="javascript:"><img src="../assets/common/share-02.png" alt="페이스북"></a></li>
										<li><a href="javascript:"><img src="../assets/common/share-03.png" alt="트위터"></a></li>
										<li><a href="javascript:"><img src="../assets/common/share-04.png" alt="인스타그램"></a></li>
									</ul>
								</div>
							</div>
						</transition>
					</div>
				</div>
				<div class="bottom">
					<ul>
						<li>
							<a href="javascript:">
								<img src="../assets/common/ico-36-forward.svg" alt="링크연결" />
								<span>링크연결</span>
							</a>
						</li>
						<li>
							<a href="javascript:">
								<img src="../assets/common/ico-36-play.svg" alt="동영상 보기" />
								<span>동영상 보기</span>
							</a>
						</li>
						<li>
							<a href="javascript:">
								<img src="../assets/common/ico-36-qr.svg" alt="QR 스캔" />
								<span>QR 스캔</span>
							</a>
						</li>
						<li>
							<a href="javascript:">
								<img src="../assets/common/ico-36-kakao.svg" alt="카톡공유" />
								<span>카톡공유</span>
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div class="right">
				<div class="top">
					<div class="title">
						<h3>제주여행 공공 플랫폼 탐나오를 탐색해주세요!</h3>
						<a href="javascript:"><img src="../assets/common/ico-20-info.svg" alt="정보" /></a>
						<p>2022.01.24-02.24</p>
					</div>
					<div class="reward">
						<dl>
							<dt><img src="../assets/common/ico-20-reward-w.svg" alt="보상액" /><span>내 보상액</span></dt>
							<dd>0.044 ETH</dd>
							<dd>190,292원</dd>
						</dl>
						<p>2022.01.24 15:32 기준<a href="javascript:"><img src="../assets/common/ico-16-refresh.svg" alt="새로고침" /></a></p>
						<ol>
							<li>
								<dl>
									<dt>1-100위</dt>
									<dd>스타벅스 아메리카노 10잔</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt>101-1,000위</dt>
									<dd>문화상품권 5,000원</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt>1,001-10,000위</dt>
									<dd>CU 1,000원 상품권</dd>
								</dl>
							</li>
						</ol>
					</div>
				</div>

				<div class="bottom">
					<div class="title">
						<h3>랭킹</h3>
						<p>축하합니다! <br />경품을 받으셨습니다</p>
					</div>
					<div class="list scroll_area">
						<ol>
							<li>
								<a href="javascript:">
									<p class="thumb"><img src="../assets/data/mem-photo-01.jpg" alt="썸네일" /></p>
									<dl>
										<dt>victory_happy</dt>
										<dd>찾은 조각 수 : 4개</dd>
									</dl>
									<p class="rank">1위</p>
								</a>
							</li>
							<li>
								<a href="javascript:">
									<p class="thumb"><img src="../assets/data/mem-photo-02.jpg" alt="썸네일" /></p>
									<dl>
										<dt>victory_happy</dt>
										<dd>찾은 조각 수 : 4개</dd>
									</dl>
									<p class="rank">2위</p>
								</a>
							</li>
							<li>
								<a href="javascript:">
									<p class="thumb"><img src="../assets/data/mem-photo-03.jpg" alt="썸네일" /></p>
									<dl>
										<dt>victory_happy</dt>
										<dd>찾은 조각 수 : 4개</dd>
									</dl>
									<p class="rank">3위</p>
								</a>
							</li>
							<li>
								<a href="javascript:">
									<p class="thumb"><img src="../assets/data/mem-photo-04.jpg" alt="썸네일" /></p>
									<dl>
										<dt>victory_happy</dt>
										<dd>찾은 조각 수 : 4개</dd>
									</dl>
									<p class="rank">4위</p>
								</a>
							</li>
							<li>
								<a href="javascript:">
									<p class="thumb"><img src="../assets/data/mem-photo-01.jpg" alt="썸네일" /></p>
									<dl>
										<dt>victory_happy</dt>
										<dd>찾은 조각 수 : 4개</dd>
									</dl>
									<p class="rank">5위</p>
								</a>
							</li>
							<li>
								<a href="javascript:">
									<p class="thumb"><img src="../assets/data/mem-photo-02.jpg" alt="썸네일" /></p>
									<dl>
										<dt>victory_happy</dt>
										<dd>찾은 조각 수 : 4개</dd>
									</dl>
									<p class="rank">6위</p>
								</a>
							</li>
							<li>
								<a href="javascript:">
									<p class="thumb"><img src="../assets/data/mem-photo-03.jpg" alt="썸네일" /></p>
									<dl>
										<dt>victory_happy</dt>
										<dd>찾은 조각 수 : 4개</dd>
									</dl>
									<p class="rank">7위</p>
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
	data() {
		return {
			showShare: false,
		}
	}
}
</script>