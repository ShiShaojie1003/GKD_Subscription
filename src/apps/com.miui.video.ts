import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.video',
  name: '小米视频',
  groups: [
    {
      key: 1,
      name: '局部广告-视频列表广告',
      fastQuery: true,
      activityIds: '.feature.detail.NewShortVideoDetailActivity',
      rules: [
        {
          matches:
            '@ImageView[id="com.miui.video:id/iv_close"][visibleToUser=true] - [text="立即下载"] - ImageView[id="com.miui.video:id/download_icon"] < [id="com.miui.video:id/v_download"]',
          snapshotUrls: 'https://i.gkd.li/i/25323739',
        },
      ],
    },
  ],
});
