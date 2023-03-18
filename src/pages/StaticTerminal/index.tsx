import React, { useEffect } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';
import { FitAddon } from 'xterm-addon-fit';
import './index.less';

export default (props: any) => {
  const { style, customDOMId = 'terminal-container', BEData } = props;

  useEffect(() => {
    const terminalDOM = document.getElementById(customDOMId) as HTMLElement;

    debugger;
    const terminal = new Terminal({
      rows: Math.ceil(terminalDOM.clientHeight / 18),
      cols: 80,
      cursorStyle: 'underline',
      cursorBlink: true,
      theme: {
        foreground: '#dddddd',
        cursor: 'gray',
      },
      // windowsMode: true,
    });

    terminal.open(terminalDOM);

    const fitAddon = new FitAddon();
    terminal.loadAddon(fitAddon);
    if (!style) {
      fitAddon.fit();
    }

    const listenerResize = function () {
      terminal.loadAddon(fitAddon);
      fitAddon.fit();
      const msg = { type: 'resize', rows: terminal.rows, cols: terminal.cols };
      console.log(
        'resize',
        msg,
        terminalDOM.clientHeight,
        terminalDOM.clientHeight / 18,
      );
    };

    window.addEventListener('resize', listenerResize);

    setTimeout(() => {
      terminal.write('Connecting to Pod, Wait a minute\r\n');
      terminal.write(
        'OCI runtime exec failed: exec failed: unable to start container process: exec: "bash": executable file not found in $PATH: unknown\r\n',
      );
      terminal.write('error command terminated with exit code 126\r\n');
      terminal.write('/ # \x1B[6n');
      terminal.write('\r/ # \x1B[J');
      terminal.write('l');
      terminal.write('s');
      terminal.write(' ');
      terminal.write('-');
      terminal.write('a');
      terminal.write('l');
      terminal.write('\r\n');
      terminal.write('total 8\r\n');
      terminal.write(
        'drwxr-xr-x    1 root     root            40 Mar 18 00:00 \x1B[1;34m.\x1B[m\r\ndrwxr-xr-x    1 root     root            40 Mar 18 00:00 \x1B[1;34m..\x1B[m\r\n-rwxr-xr-x    1 root     root             0 Mar 18 00:00 \x1B[1;32m.dockerenv\x1B[m\r\ndrwxr-xr-x    2 root     root          4096 Feb 10 16:45 \x1B[1;34mbin\x1B[m\r\ndrwxr-xr-x    5 root     root           360 Mar 18 00:00 \x1B[1;34mdev\x1B[m\r\n',
      );
      terminal.write(
        'drwxrwxr-x    1 root     root            66 Mar 18 00:00 \x1B[1;34metc\x1B[m\r\ndrwxr-xr-x    2 root     root             6 Feb 10 16:45 \x1B[1;34mhome\x1B[m\r\ndrwxr-xr-x    1 root     root            45 Mar  7 18:50 \x1B[1;34mlib\x1B[m\r\ndrwxr-xr-x    2 root     root            34 Mar  7 18:50 \x1B[1;34mlib64\x1B[m\r\n',
      );
      terminal.write(
        'drwxr-xr-x    2 root     root            22 Mar  7 18:50 \x1B[1;34mlicenses\x1B[m\r\ndrwxr-xr-x    5 root     root            44 Feb 10 16:45 \x1B[1;34mmedia\x1B[m\r\ndrwxr-xr-x    2 root     root             6 Feb 10 16:45 \x1B[1;34mmnt\x1B[m\r\ndrwxr-xr-x    2 root     root             6 Feb 10 16:45 \x1B[1;34mopt\x1B[m\r\ndr-xr-xr-x  576 root     root             0 Mar 18 00:00 \x1B[1;34mproc\x1B[m\r\ndrwx------    1 root     root            26 Mar 18 02:35 \x1B[1;34mroot\x1B[m\r\n',
      );
      terminal.write(
        'drwxr-xr-x    1 root     root            21 Mar 18 00:00 \x1B[1;34mrun\x1B[m\r\ndrwxr-xr-x    2 root     root          4096 Feb 10 16:45 \x1B[1;34msbin\x1B[m\r\ndrwxr-xr-x    2 root     root             6 Feb 10 16:45 \x1B[1;34msrv\x1B[m\r\ndr-xr-xr-x   13 root     root             0 Mar 18 00:00 \x1B[1;34msys\x1B[m\r\ndrwxrwxrwt    1 root     root            37 Mar 18 00:00 \x1B[1;34mtmp\x1B[m\r\n',
      );
      terminal.write(
        'drwxrwxr-x    1 root     root            19 Mar 17 10:33 \x1B[1;34musr\x1B[m\r\ndrwxr-xr-x   12 root     root           137 Feb 10 16:45 \x1B[1;34mvar\x1B[m\r\n',
      );
      terminal.write('/ # \x1B[6n');
      terminal.write('l');
      terminal.write('s');
      terminal.write(' ');
      terminal.write('-');
      terminal.write('a');
      terminal.write('l');
      terminal.write('\r\n');
      terminal.write('total 8\r\n');
      terminal.write(
        'drwxr-xr-x    1 root     root            40 Mar 18 00:00 \x1B[1;34m.\x1B[m\r\ndrwxr-xr-x    1 root     root            40 Mar 18 00:00 \x1B[1;34m..\x1B[m\r\n-rwxr-xr-x    1 root     root             0 Mar 18 00:00 \x1B[1;32m.dockerenv\x1B[m\r\ndrwxr-xr-x    2 root     root          4096 Feb 10 16:45 \x1B[1;34mbin\x1B[m\r\ndrwxr-xr-x    5 root     root           360 Mar 18 00:00 \x1B[1;34mdev\x1B[m\r\ndrwxrwxr-x    1 root     root            66 Mar 18 00:00 \x1B[1;34metc\x1B[m\r\ndrwxr-xr-x    2 root     root             6 Feb 10 16:45 \x1B[1;34mhome\x1B[m\r\ndrwxr-xr-x    1 root     root            45 Mar  7 18:50 \x1B[1;34mlib\x1B[m\r\ndrwxr-xr-x    2 root     root            34 Mar  7 18:50 \x1B[1;34mlib64\x1B[m\r\ndrwxr-xr-x    2 root     root            22 Mar  7 18:50 \x1B[1;34mlicenses\x1B[m\r\n',
      );
      terminal.write(
        'drwxr-xr-x    5 root     root            44 Feb 10 16:45 \x1B[1;34mmedia\x1B[m\r\ndrwxr-xr-x    2 root     root             6 Feb 10 16:45 \x1B[1;34mmnt\x1B[m\r\ndrwxr-xr-x    2 root     root             6 Feb 10 16:45 \x1B[1;34mopt\x1B[m\r\ndr-xr-xr-x  576 root     root             0 Mar 18 00:00 \x1B[1;34mproc\x1B[m\r\ndrwx------    1 root     root            26 Mar 18 02:35 \x1B[1;34mroot\x1B[m\r\n',
      );
      terminal.write(
        'drwxr-xr-x    1 root     root            21 Mar 18 00:00 \x1B[1;34mrun\x1B[m\r\ndrwxr-xr-x    2 root     root          4096 Feb 10 16:45 \x1B[1;34msbin\x1B[m\r\ndrwxr-xr-x    2 root     root             6 Feb 10 16:45 \x1B[1;34msrv\x1B[m\r\ndr-xr-xr-x   13 root     root             0 Mar 18 00:00 \x1B[1;34msys\x1B[m\r\ndrwxrwxrwt    1 root     root            37 Mar 18 00:00 \x1B[1;34mtmp\x1B[m\r\ndrwxrwxr-x    1 root     root            19 Mar 17 10:33 \x1B[1;34musr\x1B[m\r\ndrwxr-xr-x   12 root     root           137 Feb 10 16:45 \x1B[1;34mvar\x1B[m\r\n',
      );
      terminal.write('/ # \x1B[6n');
    }, 1000);
  }, []);

  return (
    <div
      id={customDOMId}
      className={customDOMId}
      style={style ? style : { width: '100%', height: '100%' }}
    />
  );
};
