NAME	= ft_transcendence

all	: $(NAME)

$(NAME)	:
	@echo "\033[32m[Launching...] \033[0m\033[1;32mft_transcendence Microservices\033[0m"
	@docker-compose up --build 

up	:
	@echo "\033[32m[Launching...] \033[0m\033[1;32mft_transcendence Microservices\033[0m"
	@docker-compose up -d

down   :
	@echo "\033[32m[Stopping configuration...] \033[0m\033[1;32m ${NAME}\033[0m"
	@docker-compose -f ./docker-compose.yml --env-file backend/.env down

clean	:
	@echo "\033[32m[Cleaning configuration...] \033[0m\033[1;32m ${NAME}\033[0m"
	docker-compose -f ./docker-compose.yml down -v --rmi all --remove-orphans

fclean	: clean
	@echo "\033[32m[Total Clean] \033[0m\033[1;32m ${NAME}\033[0m"
	docker system prune --volumes --all --force
	docker network prune --force
	docker volume prune --force
	rm -rf ./backend/node_modules

re	: fclean all

images :
	docker images

ps	:
	@echo "\033[32m[Deamon Containers...] \033[0m\033[1;32m ${NAME}\033[0m"
	docker-compose -f ./docker-compose.yml ps

ls :
	docker-compose ls

backend :
	docker exec -it backend bash

frontend :
	docker exec -it frontend bash

postgres :
	docker exec -it postgres psql

.PHONY : all down clean fclean re ls ps frontend backend postgres images