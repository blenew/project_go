<template>
	<div id="product">
		<p><a href="javascript:" @click="$router.go(-1)"><img src="../assets/common/ico-22-back.svg" alt="목록으로 돌아가기" /><span>목록으로 돌아가기</span></a></p>
		<div>
			<div class="title">
				<h2><span>희망거래로 <br /><em>좀 더 싸게 구매해보세요!</em></span></h2>
			</div>
			<div class="top">
				<div class="left">
					<div class="swiper_01">
						<ul class="swiper-wrapper">
							<li class="swiper-slide"><img src="../assets/data/prd-view-img.png" alt="썸네일"></li>
							<li class="swiper-slide"><img src="../assets/data/prd-view-img.png" alt="썸네일"></li>
							<li class="swiper-slide"><img src="../assets/data/prd-view-img.png" alt="썸네일"></li>
						</ul>
						<div class="swiper-pagination"></div>
					</div>
				</div>
				<div class="right">
					<div class="info_01">
						<p>애플 에어팟 맥스 스페이스 그레이</p>
						<ul>
							<li><a href="javascript:"><img src="../assets/common/ico-36-wish.svg" alt="찜하기"></a></li>
							<li><a href="javascript:" @click="showShare = !showShare"><img src="../assets/common/ico-36-share.svg" alt="공유하기"></a></li>
						</ul>
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
					<div class="info_02">
						<dl>
							<dt>재고 수량</dt>
							<dd>3개</dd>
						</dl>
						<dl>
							<dt>종료일</dt>
							<dd>2022.07.30</dd>
						</dl>
						<dl>
							<dt>판매 가격</dt>
							<dd>547,000원</dd>
						</dl>
						<p class="select">
							<select>
								<option>옵션선택</option>
							</select>
						</p>
						<div class="price">
							<p class="left">
								<a href="javascript:" class="minus">-</a>
								<input type="text" value="1" maxlength="2">
								<a href="javascript:" class="plus">+</a>
							</p>
							<p class="right"><span>총 금액</span>547,000원</p>
						</div>
					</div>
					<div class="btn">
						<a href="javascript:">바로구매</a>
						<a href="javascript:" @click="showPopup = true">희망거래</a>
					</div>
				</div>
			</div>
			<div class="bottom">
				<div class="section section_01" :class="{ active: toogle_01 }">
					<div class="toogle">
						<p>상세정보</p>
						<a href="javascript:" @click="toogle_01 = !toogle_01"></a>
					</div>
					<div class="content">
						<div class="content_inner">
							<img src="../assets/data/sample.png" alt="상세정보">
						</div>
					</div>
				</div>
				<div class="section section_02" :class="{ active: toogle_02 }">
					<div class="toogle">
						<p>배송 및 교환/반품 안내</p>
						<a href="javascript:" @click="toogle_02 = !toogle_02"></a>
					</div>
					<div class="content">
						<div class="content_inner">
							<dl>
								<dt>배송 관련</dt>
								<dd>결제 확인 후 1~3일 정도 소요됩니다.</dd>
							</dl>
							<dl>
								<dt>교환 및 반품</dt>
								<dd>결제 확인 후 1~3일 정도 소요됩니다.</dd>
								<dd>택배비 : 왕복 5,000원(사유가 고객에게 있는 경우에만 발생 ex:사이즈, 단순 변심 등)</dd>
								<dd>배송 완료일 이후 최대 7일 이내 신청 가능</dd>
								<dd>배송중에는 교환 및 반품 불가</dd>
								<dd>상품을 사용 혹은 훼손한 경우 교환 및 반품 불가</dd>
							</dl>
						</div>
					</div>
				</div>
			</div>
		</div>

		<transition name="fade">
			<div v-if="showPopup" id="popup">
				<div id="black" @click="showPopup = false"></div>
				<div class="popup_inner">
					<a href="javascript:" @click="showPopup = false"><img src="../assets/common/ico-44-modal-close.svg" alt="닫기"></a>
					<p class="title">원하는 가격을 잘 선택하세요.<br><em>기회는 한 번밖에 없습니다.</em></p>
					<div>
						<div class="left">
							<div class="swiper_02">
								<ul class="swiper-wrapper">
									<li class="swiper-slide"><img src="../assets/data/prd-view-img.png" alt="썸네일"></li>
									<li class="swiper-slide"><img src="../assets/data/prd-view-img.png" alt="썸네일"></li>
									<li class="swiper-slide"><img src="../assets/data/prd-view-img.png" alt="썸네일"></li>
								</ul>
								<div class="swiper-pagination"></div>
							</div>
						</div>
						<div class="right">
							<div class="info_01">
								<p>애플 에어팟 맥스 스페이스 그레이</p>
							</div>
							<div class="info_02">
								<dl>
									<dt>재고 수량</dt>
									<dd>3개</dd>
								</dl>
								<dl>
									<dt>종료일</dt>
									<dd>2022.07.30</dd>
								</dl>
								<dl>
									<dt>바로 구매 가능한 금액</dt>
									<dd>547,000원</dd>
								</dl>
							</div>
							<div class="btn">
								<form>
									<input type="text" placeholder="희망하는 가격을 입력하세요.">
									<input type="button" value="GO!">
								</form>
								<div>
									<p>다른분들의 <span>희망가격</span> 입니다.</p>
									<div>
										<dl>
											<dt>550,000원</dt>
											<dd>2022.07.26</dd>
										</dl>
										<dl>
											<dt>560,000원</dt>
											<dd>2022.07.25</dd>
										</dl>
										<dl>
											<dt>565,000원</dt>
											<dd>2022.07.23</dd>
										</dl>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showShare: false,
			showPopup: true,
			toogle_01: false,
			toogle_02: false,
		}
	},
	mounted() {
		var swiper_01 = new Swiper(".swiper_01", {
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
		})
	},
}
</script>