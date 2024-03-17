---
title: Shell expect用法描述
tags:
  - Shell
  - Expect
categories:
  - 服务器管理
date: 2022-07-01 12:01:01
thumbnail:
---
## 1. expect 自动化交互脚本

### 1.1. 介绍

expect是一个自动化交互套件，主要应用于执行命令和程序时，系统以交互形式要求输入指定字符串，实现交互通信。

### 1.2. 安装

```sh
sudo apt-get update
sudo apt-get install expect
```

### 1.3. 命令介绍

Expect中最关键的四个命令是send,expect,spawn,interact。

- send：向进程发送字符串，用于模拟用户的输入， 该命令不能自动回车换行，一般要加\r（回车）

- expect： expect的一个内部命令，判断上次输出结果里是否包含指定的字符串，如果有则立即返回，否则就等待超时时间后返回，只能捕捉由spawn启动的进程的输出expect

- spawn：启动进程，并跟踪后续交互信息

- interact：执行完成后保存交互状态，把控制权交给控制台

- set timeout 30：设置超时时间为30秒(默认的超时时间是 10 秒，通过 set 命令可以设置会话超时时间, 若不限制超时时间则应设置为-1)

- exp_continue： 允许expect继续向下执行指令meout：指定超时时间，过期则继续执行后续指令

- send_user： 回显命令，相当于echo

- `$argv`参数数组：Expect脚本可以接受从bash传递的参数，可以使用 [lindex `$argv` n] 获得，n从0开始，分别表示第一个`$1`，第二个`$2`，第三个`$3`……参数 (`$argvn`没有空格则表示脚本名称 ； `$argv` n有空格则代表下标)

一般流程：spawn 启动追踪 —> expect 匹配捕捉关键字 ——> 捕捉到将触发send 代替人为输入指令—> interact /expect eof

Expect脚本必须以interact或expect eof 结束，执行自动化任务通常expect eof就够了

expect eof 是在等待结束标志。由spawn启动的命令在结束时会产生一个eof标记，expect eof 即在等待这个标记

### 1.4. bash shell内加入expect脚本

使用`<<-EOF` ，引入expect脚本。

```shell
#!/bin/base
/usr/bin/expect <<-EOF

EOF
```



## 2. 事例

### 2.1. ssh 连接远端服务器

1). 开始构建文件

```sh
vi test_expect.exp
```

2). 构建文件内容

```sh
#!/usr/bin/expect
# 传入参数数量验证
if {$argc < 3} {
    #do something
    send_user "usage: $argv0 <remote_user> <remote_host> <remote_pwd>"
    exit
}

// 将超时设置为-1以禁用超时功能。
set timeout -1

# 远程服务器用户名
set remote_user [lindex $argv 0] 
# 远程服务器域名
set remote_host [lindex $argv 1] 
# 远程服务器密码
set remote_pwd [lindex $argv 2]

# 远程登录
spawn ssh ${remote_user}@${remote_host}
expect {
    "*password" {send "${remote_pwd}\r";}
    "*yes/no" {send "yes\r";exp_continue}
}
# ssh登陆成功后，继续进行操作。
expect "]#" { send "cd /\r" }
# 结束
expect eof
```

3). 使用脚本

```sh
./test_expect.exp username ip password
```

## 🌟 注意事项

- 脚本文件内容第一行必须加入`#!/usr/bin/expect`。
- expect 脚本文件执行必须使用 ./test_expect.exp。
