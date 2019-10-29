# Docker 常用命令
>***了解常用命令有助于控制docker行为***
## 1.  Docker 镜像常用命令
### 1.1 搜索镜像
`docker search java`
![](https://upload-images.jianshu.io/upload_images/15668934-3cf9318bcce8f2e4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
该表格包含5列，含义如下：
- NAME：镜像仓库地址
- DESCRIPTION：镜像仓库描述
- STARS: 镜像仓库收藏数
- OFFICAL：表示是否为官方仓库
- AUTIOMATED：是否是自动构建的镜像仓库
### 1.2 下载镜像
使用`docker pull` 即可从`docker registry`上下载镜像
`docker pull java`
执行该命令后，docker会从仓库下载最版本java镜像

该命令还可指定下载的镜像标签以及docker registry地址：
  `docker pull reg.itmuch.com/java:7`
  这样就可以指定从docker registry 中下载标签为7的Java镜像。
#### 示例：
`docker pull java`
![](https://upload-images.jianshu.io/upload_images/15668934-35e1fc350c870cdb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
emm...不用慌，这事没有登录docker账户的原因
 `docker login`
![](https://upload-images.jianshu.io/upload_images/15668934-0de780e5892e5386.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
再次运行`docker pull java`
![](https://upload-images.jianshu.io/upload_images/15668934-5825d4514f02fe15.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 1.3 列出镜像
列出已下载的镜像
`docker image`
![](https://upload-images.jianshu.io/upload_images/15668934-067b78edbb8468ea.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
该表格包含5列，含义如下：
- REPOSITORY：镜像所属仓库名称
- TAG：镜像标签，默认是latest，表示最新
- IMAGE ID：镜像ID，唯一标识
- CREATE：镜像创建时间
- SIZE：镜像大小
### 1.4 删除本地镜像
使用`docker rmi`命令即可删除指定名称镜像
```
docker rmi java
 ```
删除所有镜像
```
docker rmi -f ${docker images}
```  
### 1.5 保存镜像
使用`docker save`即可保存镜像
```
docker save [options] IMAGE [IMAGE...]
# 参数
# --output，-o   输出到文件，而非标准输出
```
示例：
```
#  将java保存为java.tar
docker save java > java.tar
docker save --output java.tar java
```
### 1.6 加载镜像
使用 `docker load `命令即可加载镜像
 ```
docker load [option]
# 参数
# 1. --input，-i  从文件加载而非标准输入
# 2. --quiet，-q 静默加载
```
示例：
```
# 从java.tar文件中加载镜像
docker load < java.tar
docker load --input java.tar
``` 
### 1.7 构建镜像
`docker build` 命令用于使用 Dockerfile 创建镜像。

```
docker build [OPTIONS] PATH | URL | -
```
[参数options详情](https://docs.docker.com/engine/reference/commandline/build/)
[Docker官方手册](https://docs.docker.com/engine/reference/commandline/build/)
---
## 2. Docker容器常用命令
### 2.1 新建并启动容器
使用`docker run`命令即可新建并启动一个容器
```
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
```

| 名称，缩写 | 描述 |
| --- | ---|
|--detach，-d|后台运行容器，并打印容器ID |
|--publish-all，-p|随机映射所有端口|
|--publish，-p|随机端口映射|
|--network| 指定网络模式|
[详细参数](https://docs.docker.com/engine/reference/commandline/run/)
******
```
>> --pulish,-p    指定端口映射，该模式下有四种格式：
1. ip:hostPort:containerPort
2. ip::containerPort
3. hostPort:containerPort
4. containerPort

>> --network     指定网络模式，四种可选参数
1. --network=bridge：默认选项，连接到默认网桥
2. --network=host：容器使用宿主机的网络
3. --network=container：NAME_or_ID:告诉Docker让新建的容器使用已有容器的网络设置
4. --network=none：不配置该容器的网络，用户可自定义网络配置。
```

- 示例1
`docker run java /bin/echo 'hello world' `
![](https://upload-images.jianshu.io/upload_images/15668934-7f982a0f256cc661.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
终端打印 hello world 

- 示例2
`docker run -p -d 91:80 nginx`
这样就可以启动一个Nginx容器
![](https://upload-images.jianshu.io/upload_images/15668934-9cba7bedcc4d90a9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/15668934-b16184cad787a3a8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

访问`http:Docker宿主IP:91/`,看到如下界面
![](https://upload-images.jianshu.io/upload_images/15668934-e4956a2bb1866a41.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
>使用`docker run`命令创建容器时，会先检查本地是否存在指定镜像。如果本地不存在该名称的镜像，Docker会自动从Docker Hub上下载镜像并启动一个Docker容器。
### 2.2 列出容器
使用`docker ps` 即可列出正在运行中的容器
![](https://upload-images.jianshu.io/upload_images/15668934-0080162bb9c0f0f2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 2.3 停止容器
使用`docker stop 164eb0670198` 即可停止容器
![](https://upload-images.jianshu.io/upload_images/15668934-100fd92e94df60a7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 2.4 强制停止容器
`docker kill 164eb0670198` 

### 2.5 启动已停止容器
`docker start 164eb0670198` 

### 2.6 重启容器
`docker restart 164eb0670198` 

### 2.7 进入容器
`docker attach 164eb0670198` 

### 2.8 删除容器
`docker rm 164eb0670198` 
