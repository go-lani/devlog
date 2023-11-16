'use client';

import Giscus from '@giscus/react';

export default function Comments() {
  return (
    <div className="border-style border-t px-4 pt-4">
      <Giscus
        id="comments"
        repo="go-lani/devlog"
        repoId="R_kgDOKIdP-w"
        category="Announcements"
        categoryId="DIC_kwDOKIdP-84CY_US"
        mapping="pathname"
        strict="1"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="noborder_dark"
        lang="ko"
        loading="lazy"
      />
    </div>
  );
}
