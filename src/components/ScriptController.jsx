import { useEffect } from 'react';

export default function ScriptController() {
  useEffect(() => {
    // Hàm xử lý hiển thị section dựa trên ID
    function updateContent(contentId) {
      // Ẩn tất cả các section
      document.querySelectorAll('.ct-section').forEach((section) => {
        section.classList.remove('active');
      });

      // Hiện section tương ứng
      const section = document.getElementById(contentId);
      if (section) {
        section.classList.add('active');
        // Cập nhật hash trên URL mà không reload
        window.history.replaceState(null, '', `#${contentId}`);
      }
    }

    // 1. Xử lý khi click menu
    document.querySelectorAll('.menu-toggle').forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const subMenu = item.nextElementSibling;
        if (subMenu?.classList) {
          subMenu.classList.toggle('active');
        }
      });
    });

    // 2. Xử lý khi click vào liên kết chuyển nội dung
    document.querySelectorAll('.sb a[data-content]').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const contentId = link.getAttribute('data-content');
        updateContent(contentId);
      });
    });

    // 3. Khi trang tải, xử lý hash nếu có
    const initialHash = window.location.hash.substring(1);
    if (initialHash && document.getElementById(initialHash)) {
      updateContent(initialHash);
    } else {
      updateContent('home'); // fallback mặc định
    }

    // 4. Nếu người dùng thay đổi hash (VD: bấm link đến /hdsd#history)
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.substring(1);
      if (hash && document.getElementById(hash)) {
        updateContent(hash);
      }
    });

    // Cleanup listeners khi component bị unmount (không bắt buộc với static site nhưng tốt)
    return () => {
      window.removeEventListener('hashchange', updateContent);
    };
  }, []);

  return null;
}
