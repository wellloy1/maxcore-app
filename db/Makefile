ifeq (setver,$(firstword $(MAKECMDGOALS)))
  ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(ARGS):;@:)
endif

SERVICE_NAME:=provider-admin-db
VERSION=$(shell cat version)
LDFLAGS="-s -w -X main.serviceVersion=${VERSION}"

setver:
	@echo "Set service version..."
	@echo -n $(ARGS) > version


build: Dockerfile version
	@echo "Build & push docker image with specified tag version"
	DOCKER_BUILDKIT=1 docker build --add-host gitlab.admiralgroup.club:193.33.100.200  \
	-f Dockerfile -t gitlab.admiralgroup.club:9482/provider/rmg/$(SERVICE_NAME):${VERSION} .

public: Dockerfile version
	@echo "Push to gitlab with specified tag version"
	$(MAKE) build
	git tag -a v${VERSION} -m "v${VERSION}"
	git push adm refs/tags/v${VERSION}
	docker push gitlab.admiralgroup.club:9482/provider/rmg/$(SERVICE_NAME):${VERSION}

push: version
	@echo "Push to gitlab regestry"
	docker push gitlab.admiralgroup.club:9482/provider/rmg/$(SERVICE_NAME):${VERSION}
