<template>
	<div id="myinfo" class="wallet">
		<div class="contents_wrap">
			<form>
				<div class="input_wrap">
					<div class="col">
						<label for="input_01">이름</label>
						<input id="input_01" type="text" value="홍길동" />
					</div>
					<div class="col">
						<label for="input_02">영문이름</label>
						<input id="input_02" type="text" value="Kildong, Hong" />
					</div>
					<div class="col">
						<label for="input_03">생년월일</label>
						<input id="input_03" type="text" value="1977.02.03" />
					</div>
					<div class="col">
						<label for="input_04">성별</label>
						<select id="input_04">
							<option>남자</option>
							<option>여자</option>
						</select>
					</div>
					<div class="col">
						<label for="input_05">이메일</label>
						<input id="input_05" type="text" value="hkdo***@naver.com" />
					</div>
					<div class="col">
						<label for="input_06">전화번호</label>
						<input id="input_06" type="text" value="01012345678" />
					</div>
					<div class="col">
						<label for="input_07">주소</label>
						<input id="input_07" type="text" value="경기도 고양시 일산서구 123" />
					</div>
				</div>
			</form>
		</div>

		<div class="menu_list">
			<ul>
				<li>
					<a href="javascript:">
						<div>
							<p><span>약관 및 이용동의</span></p>
							<p><img src="../assets/common/ico-22-arrow.svg" alt="이동" /></p>
						</div>
					</a>
				</li>
				<li>
					<a href="javascript:">
						<div>
							<p><span>기타정보</span></p>
							<p><img src="../assets/common/ico-22-arrow.svg" alt="이동" /></p>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>