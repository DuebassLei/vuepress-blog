---
title: Ubuntu环境下的搭建java开发环境
date: 2019-01-12 17:35:20
tags:
- Ubuntu
categories:
- Linux
---

#### 准备

1. Ubuntu 17.04 
2. jdk-8u181-linux-x64.tar
3. eclipse-committers-oxygen-3a-linux-gtk-x86_64.tar

<!-- more -->

##### java jdk 和Eclipse已经放置在路径`/usr/java`下
![](https://upload-images.jianshu.io/upload_images/4335059-442d795976dc803e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/4335059-d983de731494285f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### <一>Java开发环境配置

1.  解压Java JDK至当前文件路径

![](https://upload-images.jianshu.io/upload_images/4335059-08b3afb3ced093b0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
2.  配置java JDK的环境变量

(1)用vim编辑`bashrc`文件

命令：`sudo vim ~/.bashrc`
![](https://upload-images.jianshu.io/upload_images/4335059-04e53902f9201814.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/4335059-88af543ce97e71fe.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

(2)输入命令`source ~/.bashrc`应用刚才的配置文件，使其生效
 ![](https://upload-images.jianshu.io/upload_images/4335059-651548983c39893e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
(3)查看Java环境配置是否生效
![](https://upload-images.jianshu.io/upload_images/4335059-d284de2897cceec7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 到这里，Java环境配置成功。

#### <二>Eclipse离线安装
(1). 解压Eclipse至当前文件路径
![](https://upload-images.jianshu.io/upload_images/4335059-9c457244d3bdaab2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
(2). 若不添加eclipse图标到Linux桌面,最简单的方式直接在Eclipse文件下创建一个软连接指向Java JRE 路径：
![](https://upload-images.jianshu.io/upload_images/4335059-8dda4241083ed1af.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

(3) 点击如图所示Eclipse，正常启动软件
![](https://upload-images.jianshu.io/upload_images/4335059-ef221216155590f1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/4335059-5171b5365be805a9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### Eclipse安装完成,这里只是简单总结在Ubuntu上搭建Java开发环境。



