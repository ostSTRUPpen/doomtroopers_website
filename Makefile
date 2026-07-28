# For docker related commands
NAME=dt_website

up:
	docker compose up -d

down:
	docker compose down

dev: up
	docker compose exec $(NAME) npm run dev -- --host

bash: up
	docker compose exec $(NAME) bash