/*********************************

脚本功能：元气表面壁纸——解锁会员
下载地址：https://is.gd/yfTj5W

使用说明：此脚本仅提供学习与交流，请勿转载与卖家！⚠️⚠️⚠️

**********************************
[重写本地]

^http[s]?:\/\/mobile-ios-wallpaper-api.zhhainiao.com\/v1\/user\/info url script-response-body https://raw.githubusercontent.com/lifei2672540/lifei/main/yqzm.js

[中间人]

hostname = mobile-ios-wallpaper-api.zhhainiao.com

**********************************/

var objc = JSON.parse($response.body);
    对象 = {
  “用户信息” ： {
    “uid”：76837142，
    “用户类型”：0，
    “following_count”：0，
    “works_mobile_download_cnt”：0，
    "昵称" : "彭于晏crack",
    "wx_openid" : "",
    “is_real_name_auth”：0，
    “open_id”：“1624225033495252992”，
    “works_mobile_cnt”：0，
    “mobile_like_cnt”：0，
    “mobile_like_static_cnt”：0，
    “works_scan_cnt”：0，
    “works_like_cnt”：0，
    “follower_count”：0，
    “user_desc”：“”，
    “mobile_static_buy_wp_cnt”：0，
    “mobile_buy_wp_cnt”：0，
    “like_static_wp_cnt”：0，
    “contract_user_type”：0，
    “permission_vip_info”：[
      {
        “vip_ex_date”：2676251736，
        "vip_type" : "13",
        “vip_start_date”：0
      }
    ],
    “works_static_cnt”：0，
    “works_mobile_like_cnt”：0，
    “works_cnt”：0，
    "头像" : "http://newvip-cdn.zhhainiao.com/public/avatar/avatar4@2x.jpg",
    “登录用户信息”：{
      “lenovo_info”：空，
      “facebook_info”：空，
      “mobile_info”：空，
      “wx_infos”：空，
      "qq_infos" : 空,
      “is_tourist”：0，
      “google_info”：空，
      “邮件信息”：空，
      “苹果信息”：空
    },
    “当前时间”：1676165575，
    “works_mobile_static_cnt”：0，
    “like_wp_cnt”：0，
    “static_buy_wp_cnt”：0，
    “works_mobile_live_cnt”：0，
    “works_live_cnt”：0，
    “buy_wp_cnt”：0，
    “works_download_cnt”：0，
    “works_mobile_scan_cnt”：0，
    “vip_type”：0，
    “合同状态”：0
  },
  “permission_vip_info”：[
    {
      “vip_ex_date”：2676251736，
      "vip_type" : "13",
      “vip_start_date”：0
    }
  ],
  “resp_common”：{
    “退”：0，
    “消息”：“好的”，
    “request_id”：“63e841c7-2bf9bf3a”
  },
  “平台”：[
    {
      “上次”：1676138665，
      “第一次”：1676080400，
      “参考” ： ””，
      “frm”：“”，
      “平台”：“ios”
    }
  ]
}

$done({正文：JSON.stringify(objc)});
