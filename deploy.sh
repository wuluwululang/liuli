# 打包 liuli_schedule
docker build --no-cache=true -t liuliio/schedule:v0.2.4 -f schedule.Dockerfile .
# 打包使用缓存
docker build --no-cache=false -t liuliio/schedule-amd64:v0.2.4 -f schedule.Dockerfile .
docker buildx build --no-cache=false --platform linux/arm/v7 -t liuliio/schedule-armv7:v0.2.4 -f schedule.Dockerfile .
docker buildx build --no-cache=false --platform linux/arm/v8 -t liuliio/schedule-armv8:v0.2.4 -f schedule.Dockerfile .

docker build --no-cache=false -t liuliio/schedule:v0.2.4_playwright -f schedule_playwright.Dockerfile .
# 暂不支持
docker buildx build --no-cache=false --platform linux/arm/v7 -t liuliio/schedule-armv7:v0.2.4_playwright -f schedule_playwright.Dockerfile .
# 运行
docker run -d -it --restart=always -v $PWD/pro.env:/data/code/pro.env -v $PWD/liuli_config:/data/code/liuli_config --name liuli_schedule liuliio/schedule:v0.2.4
# 上传
docker push liuliio/schedule-amd64:v0.2.4
docker push liuliio/schedule-armv7:v0.2.4
docker push liuliio/schedule-armv8:v0.2.4

docker manifest rm liuliio/schedule:v0.2.4
docker manifest create liuliio/schedule:v0.2.4 liuliio/schedule-amd64:v0.2.4 liuliio/schedule-armv7:v0.2.4 liuliio/schedule-armv8:v0.2.4
docker manifest push liuliio/schedule:v0.2.4

docker push liuliio/schedule:v0.2.4_playwright
docker manifest create liuliio/schedule:v0.2.4_playwright liuliio/schedule-amd64:v0.2.4_playwright liuliio/schedule-armv7:v0.2.4_playwright
docker manifest push liuliio/schedule:v0.2.4_playwright

# 打包 liuli_api
docker build --no-cache=true -t liuliio/api:v0.1.3 -f api.Dockerfile .
# 打包使用缓存
docker build --no-cache=false -t liuliio/api-amd64:v0.1.3 -f api.Dockerfile .
docker buildx build --no-cache=false --platform linux/arm/v7 -t liuliio/api-armv7:v0.1.3 -f api.Dockerfile .
docker buildx build --no-cache=false --platform linux/arm/v8 -t liuliio/api-armv8:v0.1.3 -f api.Dockerfile .
# 运行
docker run -d -it --restart=always -p 8765:8765 -v $PWD/pro.env:/data/code/pro.env --name liuli_api liuliio/api:v0.1.3
# 上传
docker push liuliio/api-amd64:v0.1.3
docker push liuliio/api-armv7:v0.1.3
docker push liuliio/api-armv8:v0.1.3

docker manifest rm liuliio/api:v0.1.3
docker manifest create liuliio/api:v0.1.3 liuliio/api-amd64:v0.1.3 liuliio/api-armv7:v0.1.3 liuliio/api-armv8:v0.1.3
docker manifest push liuliio/api:v0.1.3