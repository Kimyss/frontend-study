1. 커밋 메시지 룰과 작성법
  첫번째 라인 : 제목(필수)
  두번째 라인 : 공란
  세번째 라인부터 : 내용 작성, 무엇을 왜(선택)
  마지막 라인 : 꼬리말(#이슈 넘버)(선택)

  작성팁 : 최대한 구체적으로 작성, 개인적인 팁으로 주간보고에 그대로 쓸 정도로 작성
  참고자료 : https://github.com/RomuloOliveira/commit-messages-guide/blob/master/README_ko-KR.md

  # ----------(예시)------------------------------
  fix: Safari에서 모달을 띄웠을 때 스크롤 이슈 수정

  모바일 사파리에서 모달을 띄웠을때,
  모달 밖의 상하 스크롤이 움직이는 이슈 수정

  resolves: #1137
  # ---------------------------------------------

  2. 커밋 전에 diff 확인하기 ! (차이점 변경점 확인)
   명령어로 git diff  (솔직히 보기 좀 불편)

  3. 왜 굳이 git add -> git commit 두 단계에 걸쳐서 하는지? 왜 굳이 add해서 파일을 고른 후 commit하는가
      모든 파일을 굳이 기록 할 필요가 없기 때문
      버전을 여러개로 나눠서 만들고 싶은 경우
      1) git add로 기록할 파일을 고르고
      2) git commit로 버전 생성(기록완료)
  
  4. 언제, 얼마나 commit하는게 좋을까?
    Ctrl + s 처럼 습관적으로 할 필요는 없고
    간단한 기능을 하나 추가할 때 마다 commit 하면 됨

    예를 들어 회원가입 기능을 만든다고 하면
    - 회원가입 폼 레이아웃 UI 만들면 commit 하고
    - 입력한 이메일이 맞는지 검증하는 기능(우효성 검사)을 만들었으면 commit 하고
    - 서버에 데이터를 전송하는 기능을 만들었으면 commit 하고

    대충 이렇게 작은 작업 하나를 마쳤으면 commit 하는게 좋음
    물론 3개 다 만들고 commit 하는 사람들도 있음
    중요한건 하루 1개이상 commit 할것 !

  5. CLI 명령어 기반  vs GUI 툴 비교
    명령어는 모든 기능 사용 가능한 반면 GUI툴은 툴 자체에 구현된 기능만 쓸 수 있음

  6. git push -u origin main
    -u 옵션은 방금 입력한 주소를 기억해라
    그 다음부터는 주소를 입력하지 않고 git push만 입력해도 됨

  7. git remote -v
    원격저장소 정보를 보고 싶을때

  8. git clone https://원격저장주소[DIR]
    원격 저장소에 올린 프로젝트를 내 로컬에 복제(1번만 하면 됨)
    [DIR] : 대상 폴더를 입력 (생략하면 현재 폴더)
  9. git pull 원격저장소주소 (origin)
    원격 저장소에 있는 모든 브랜치 내용을 가져와서 로컬 저장소에 합치라는 것
    이걸 해주면 로컬이 최신상태가 되기 때문에 이제 git, push가 가능하다
    항상 최신 사항이 있으면 git pull을 먼저 하고 나서 작업하는 습관이 좋음

    git pull origin main
    특정 브랜치(main)만 가져올 수 있음

  10. 저장소에 올리지 않을 파일들은 .gittignore
    설정 파일이나 빌드 산출물, 기타 라이브러리 파일등
    불필요한 파일들은 올리지 않는 것이 좋음
    .gitinore 파일을 만들어서 올리지 않을 폴더나 파일을 명시하면 됨
    그러면 git에서 해당폴더랑 파일을 무시함

    오늘의 과제:
    1)VS Code 정리한 것 받아가기
    2)파일 만들거나 파일 내용 수정하면서 commit 5번 해보기
    중간중간 git status, git log 명령어도 사용해보기


    수정사항 발생
    수정사항 발생2
    수정사항 발생3

    GUI툴 연습
    GUI툴 연습

# Git 추가 수업
## 브랜치란?
branch: 독립적인 작업을 위한 프로젝트의 가지
(branch 뜻? 나뭇가지, 지사[분점], 갈라지다[나뉘다])
브랜치끼리는 영향을 받지 않음(독립적이다.), 한 프로젝트에서 동시에 병렬로 여러 작업을 진행 가능
(브랜치를 딴다 = 가지 치기)
깃의 브랜치 전략은 회사마다 다름(일반적으로 많이 쓰이는 전략이 git flow)

## 브랜치 이점?
0) 내가 작업하는 동안에는 충돌 발생 안함. 마지막에 Merge(병합) 할 때 충돌 발생 시 한 번만 해결하면 됨!
1) 기능 만들다 뭐가 잘못되면 브랜치를 버리면 됨
2) 깃 이력 관리가 체계적
3) 용도에 맞게 다양하게 사용 가능(main, develop, feature, release, hotfix)
- 활용 예: git flow 전략
  - main(master): 기준이 되는 브랜치로 제품을 배포(출시)하는 브랜치
  - develop: 개발 브랜치, 각자 작업한 기능들을 여기에 합친다. 즉, 다음 버전을 개발하는 브랜치
  - feature: 단위 기능을 개발하는 브랜치, 기능 개발이 완료되면 develop 브랜치에 병합한다. (feature/, feature-)
  - release: 배포를 위해 main 브랜치로 보내기 전에 QA(품질검사)를 하기 위한 브랜치
  - hotfix: 배포(출시) 버전에서 버그가 생겼을 때 긴급 수정하는 브랜치

## git 브랜치 연습 - (README.md에 연습하기)
1. 작업 전 브랜치를 가장 최신으로 (git pull or git pull origin main)
- 그래야 충돌을 최소화 할 수 있음(습관화하기), 했는지 안했는지 기억이 안나면 무조건하기!
2. 기능 브랜치 만들기 (git branch ex:git branch feature/login)
3. 브랜치 이동 (git checkout)
4. 작업 하기 -> 커밋 만들기 -> 푸쉬하기
5. 깃헙에서 pull request 만들기
6. 리뷰 후 머지하기
- 프로젝트 기간중에는 코드 리뷰할 시간이 없으므로 자기껀 자기가 알아서 머지
- 머지 후에는 헷갈리지 않게 원격저장소(깃헙)에서 바로바로 delete branch 해주기(로컬저장소도 같이 정리)

(실습)
나: 로그인 기능 개발

## git 충돌 해결 연습
1. 작업 전 브랜치를 가장 최신으로 (git pull)
- 그래야 충돌을 최소화 할 수 있음(습관화하기), 했는지 안했는지 기억이 안나면 무조건하기!
2. 기능 브랜치 만들기 (git branch)
3. 브랜치 이동 (git checkout)
4. 작업 하기 -> 커밋 만들기 -> 푸쉬하기
5. main에 다른 사람이 먼저 작업 올림
6. 깃헙에서 pull request 만들기
7. (충돌 해결 가이드에 따라) 로컬에서 충돌 해결하고 다시 push하기
- 간단한 충돌은 web editor로 수정 가능
- 충돌이 많이 난 경우 command line 가이드에 따라 해결
8. 리뷰 후 머지하기

(실습) 
나: 로그인 기능 추가
팀동료: 로그아웃 기능


## 원격저장소의 브랜치 정보 받기
- 원격에 있는 최신 정보 가져오기(업데이트)
git fetch --all -p

- 원격에 있는 새로운 브랜치 받기
git checkout -t origin/feature/login

[참고]
https://techblog.woowahan.com/2553/
https://ujuc.github.io/2015/12/16/git-flow-github-flow-gitlab-flow/