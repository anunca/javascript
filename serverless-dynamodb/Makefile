.PHONY: help
.DEFAULT_GOAL := help

include .env
-include .env.local

ENV ?= dev
TAG ?= ${ENV}
DOCKER_SHELL ?= sh

dc_files = docker-compose.yml
dc = docker compose $(foreach f,$(dc_files),-f $(f))

SLS_RUN = $(dc) run --rm sls $(DOCKER_SHELL) -c

export ENV
export TAG

help h: ## Show help
	@awk 'BEGIN {FS = ":.*##"} \
	/^[a-zA-Z0-9_. -]+:.*##/ { \
		split($$1,a," "); \
		printf "%-20s %s\n", a[1], $$2 \
	} \
	/^##@/ {printf "\n%s\n", substr($$0,5)}' $(MAKEFILE_LIST)

##@ Docker
config c: ## Show config
	$(dc) config

build b: ## Build images
	$(dc) build

start s: ## Start containers
	$(dc) up -d

stop st: ## Stop containers
	$(dc) down -t0

restart r: stop start ## Restart

run: ## Run shell
	$(dc) run --rm --entrypoint $(DOCKER_SHELL) app

shell sh: ## Exec shell
	$(dc) exec app $(DOCKER_SHELL)

logs l: ## Follow logs
	$(dc) logs -f

ps: ## List containers
	$(dc) ps -a

clean cl: stop ## Cleanup docker
	docker system prune -fa && docker volume prune -fa

##@ SLS
s.print s.p: ## Print
	$(SLS_RUN) "sls print"

s.package s.pa: ## Package
	$(SLS_RUN) "sls package --verbose"

s.deploy s.d: build ## Deploy
	$(SLS_RUN) "sls deploy --verbose"
	
s.remove s.r: ## Remove
	$(SLS_RUN) "sls remove --verbose"

s.invoke s.i: ## Invoke
	$(SLS_RUN) "sls invoke local -f hello"

##@ DynamoDB
ddb.create: ## Create
	export DYNAMODB_TABLE=${DYNAMODB_TABLE}\
	&& export DYNAMODB_URL=${DYNAMODB_URL}\
	&& bash sh/ddb_create.sh
ddb.delete: ## Delete
	export DYNAMODB_TABLE=${DYNAMODB_TABLE}\
	&& export DYNAMODB_URL=${DYNAMODB_URL}\
	&& bash sh/ddb_delete.sh
ddb.describe: ## Describe
	export DYNAMODB_TABLE=${DYNAMODB_TABLE}\
	&& export DYNAMODB_URL=${DYNAMODB_URL}\
	&& bash sh/ddb_describe.sh