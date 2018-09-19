import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layouts/default'

const DesignIndex = () => (
    <Layout title="Home" headerDividerStyle="shadow">
        <div className="center">
            <div className="bg-white br4 shadow-1 pa15 pt12 pb12">
                <h1 className="f-subheadline fw3 mt0">Docs Design System</h1>
                <div className="post-content">
                    <h1>Page Templates</h1>
                    <ul>
                        <li><Link to="/design/full-width-page/">Full width</Link></li>
                        <li><Link to="/design/left-sidebar-page/">Left sidebar</Link></li>
                        <li><Link to="/design/custom-page/">Custom</Link></li>
                    </ul>

                    <h1>Typography</h1>
                    <ul>
                        <li><Link to="/design/typography/">Type scale and vertical rhythm</Link></li>
                    </ul>
                    
                    <h1>Components</h1>
                    <h2>Headers</h2>
                    <ul>
                        <li><Link to="/design/hairline-header/">Hairline</Link></li>
                        <li><Link to="/design/shadow-header/">Shadow</Link></li>
                        <li><Link to="/design/custom-header/">Custom</Link></li>
                    </ul>

                    <h2>Boxes</h2>
                    <ul>
                        <li><Link to="/design/white-box/">White Box</Link></li>
                        <li><Link to="/design/outline-box/">Outline Box</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    </Layout>
)

export default DesignIndex
