/* eslint-disable */
/**
 * 本文件由工具自动生成，请勿随意改动！！！
 * @name 自动生成api
 * @description 在下方手动添加接口可自动生成
 * @tutorial api.yaml
 */
const DEV_MODE = process.env.NODE_ENV === 'development'

const API_BASE = '/heter-web-api'

const _basePath = (url) => {
    return `${API_BASE}${url}`
}

export default {
    user_getuserinfo: _basePath('/user/getUserInfo'), // 获取用户信息
    oauth_check_token: _basePath('/oauth/check_token'), // 检查登录状态
    farmland_getmapcenter: _basePath('/farmland/getMapCenter'), // 获取中心点坐标
    farmland_computesignedarea: _basePath('/farmland/computeSignedArea'), // 计算区域面积
    announcement_addannouncement: _basePath('/announcement/addAnnouncement'), // 添加公告信息
    announcement_deleteannouncement: _basePath('/announcement/deleteAnnouncement'), // 删除公告信息
    announcement_getannouncement: _basePath('/announcement/getAnnouncement'), // 获取公告信息
    announcement_listannouncement: _basePath('/announcement/listAnnouncement'), // 列表公告信息
    announcement_listreadannouncement: _basePath('/announcement/listReadAnnouncement'), // 获取未读列表
    announcement_queryannouncementspage: _basePath('/announcement/queryAnnouncementsPage'), // 查询公告信息
    announcement_readannouncements: _basePath('/announcement/readAnnouncements'), // 获取未读列表
    announcement_updateannouncement: _basePath('/announcement/updateAnnouncement'), // 更新公告信息
    auth_code: _basePath('/auth/code'), // 校验验证码
    chinaarea_addchinaarea: _basePath('/chinaArea/addChinaArea'), // 添加地址库信息
    chinaarea_deletechinaarea: _basePath('/chinaArea/deleteChinaArea'), // 删除地址库信息
    chinaarea_getchinaarea: _basePath('/chinaArea/getChinaArea'), // 获取地址库信息
    chinaarea_listchinaarea: _basePath('/chinaArea/listChinaArea'), // 列表地址库信息
    chinaarea_listchinaareatree: _basePath('/chinaArea/listChinaAreaTree'), // 查询地址库树
    chinaarea_querychinaareaspage: _basePath('/chinaArea/queryChinaAreasPage'), // 查询地址库信息
    chinaarea_updatechinaarea: _basePath('/chinaArea/updateChinaArea'), // 更新地址库信息
    farmland_addfarmland: _basePath('/farmland/addFarmland'), // 添加我的农田
    farmland_deletefarmland: _basePath('/farmland/deleteFarmland'), // 删除我的农田
    farmland_getcroplist: _basePath('/farmland/getCropList'), // 获取行政信息(经度+纬度)
    farmland_getfarmland: _basePath('/farmland/getFarmland'), // 获取我的农田
    farmland_getfertilizerdata3: _basePath('/farmland/getFertilizerData3'), // 获取行政信息(经度+纬度)
    farmland_getmanagementunitdata: _basePath('/farmland/getManagementUnitData'), // 获取耕地资源管理单元图数据(系统代码+行政代码+OID)(耕地资源管理单元图+耕地资源管理单元属性数据表(主))
    farmland_getregioninfobylocation: _basePath('/farmland/getRegionInfoByLocation'), // 获取行政信息(经度+纬度)
    farmland_listfarmland: _basePath('/farmland/listFarmland'), // 列表我的农田
    farmland_queryfarmlandspage: _basePath('/farmland/queryFarmlandsPage'), // 查询我的农田
    farmland_updatefarmland: _basePath('/farmland/updateFarmland'), // 更新我的农田
    file_fileupload: _basePath('/file/fileUpload'), // 证照上传
    file_getfilepath: _basePath('/file/getFilePath'), // 获取文件绝对地址
    file_removefile: _basePath('/file/removeFile'), // 读取图片流
    receiver_addreceiver: _basePath('/receiver/addReceiver'), // 添加用户接收公告信息
    receiver_deletereceiver: _basePath('/receiver/deleteReceiver'), // 删除用户接收公告信息
    receiver_getreceiver: _basePath('/receiver/getReceiver'), // 获取用户接收公告信息
    receiver_listreceiver: _basePath('/receiver/listReceiver'), // 列表用户接收公告信息
    receiver_queryreceiverspage: _basePath('/receiver/queryReceiversPage'), // 查询用户接收公告信息
    receiver_updatereceiver: _basePath('/receiver/updateReceiver'), // 更新用户接收公告信息
    uc_element_addelement: _basePath('/uc/element/addElement'), // 添加页面元素
    uc_element_deleteelement: _basePath('/uc/element/deleteElement'), // 删除页面元素
    uc_element_getelement: _basePath('/uc/element/getElement'), // 获取页面元素
    uc_element_listelement: _basePath('/uc/element/listElement'), // 列表页面元素
    uc_element_queryelementspage: _basePath('/uc/element/queryElementsPage'), // 查询页面元素
    uc_element_updateelement: _basePath('/uc/element/updateElement'), // 更新页面元素
    uc_invite_addinvite: _basePath('/uc/invite/addInvite'), // 添加邀请记录表
    uc_invite_deleteinvite: _basePath('/uc/invite/deleteInvite'), // 删除邀请记录表
    uc_invite_getinvite: _basePath('/uc/invite/getInvite'), // 获取邀请记录表
    uc_invite_listinvite: _basePath('/uc/invite/listInvite'), // 列表邀请记录表
    uc_invite_queryinvitespage: _basePath('/uc/invite/queryInvitesPage'), // 查询邀请记录表
    uc_invite_updateinvite: _basePath('/uc/invite/updateInvite'), // 更新邀请记录表
    uc_menu_addmenu: _basePath('/uc/menu/addMenu'), // 添加菜单
    uc_menu_deletemenu: _basePath('/uc/menu/deleteMenu'), // 删除菜单
    uc_menu_getmenu: _basePath('/uc/menu/getMenu'), // 获取菜单
    uc_menu_listmenu: _basePath('/uc/menu/listMenu'), // 列表菜单
    uc_menu_listmenutree: _basePath('/uc/menu/listMenuTree'), // 查询菜单
    uc_menu_querymenuspage: _basePath('/uc/menu/queryMenusPage'), // 查询菜单
    uc_menu_sortmenu: _basePath('/uc/menu/sortMenu'), // 排序菜单
    uc_menu_updatemenu: _basePath('/uc/menu/updateMenu'), // 更新菜单
    uc_permission_addpermission: _basePath('/uc/permission/addPermission'), // 添加权限
    uc_permission_deletepermission: _basePath('/uc/permission/deletePermission'), // 删除权限
    uc_permission_getpermission: _basePath('/uc/permission/getPermission'), // 获取权限
    uc_permission_listpermission: _basePath('/uc/permission/listPermission'), // 列表权限
    uc_permission_querypermissionspage: _basePath('/uc/permission/queryPermissionsPage'), // 查询权限
    uc_permission_updatepermission: _basePath('/uc/permission/updatePermission'), // 更新权限
    uc_role_addrole: _basePath('/uc/role/addRole'), // 添加角色信息
    uc_role_deleterole: _basePath('/uc/role/deleteRole'), // 删除角色信息
    uc_role_getrole: _basePath('/uc/role/getRole'), // 获取角色信息
    uc_role_listrole: _basePath('/uc/role/listRole'), // 列表角色信息
    uc_role_queryrolespage: _basePath('/uc/role/queryRolesPage'), // 查询角色信息
    uc_role_saverolemenu: _basePath('/uc/role/saveRoleMenu'), // 修改角色菜单
    uc_role_updaterole: _basePath('/uc/role/updateRole'), // 更新角色信息
    uc_user_adduser: _basePath('/uc/user/addUser'), // 添加用户信息
    uc_user_deleteuser: _basePath('/uc/user/deleteUser'), // 删除用户信息
    uc_user_getuser: _basePath('/uc/user/getUser'), // 获取用户信息
    uc_user_getuserbasicinfo: _basePath('/uc/user/getUserBasicInfo'), // 获取用户信息
    uc_user_getusertree: _basePath('/uc/user/getUserTree'), // 查询用户
    uc_user_listuser: _basePath('/uc/user/listUser'), // 列表用户信息
    uc_user_queryinviteuserspage: _basePath('/uc/user/queryInviteUsersPage'), // 查询邀请用户信息
    uc_user_queryusertype: _basePath('/uc/user/queryUserType'), // 获取用户信息
    uc_user_queryuserspage: _basePath('/uc/user/queryUsersPage'), // 查询用户信息
    uc_user_register: _basePath('/uc/user/register'), // 添加用户信息
    uc_user_resetusertpassword: _basePath('/uc/user/resetUsertPassword'), // 重置用户
    uc_user_saveuserrole: _basePath('/uc/user/saveUserRole'), // 修改用户角色
    uc_user_updateuser: _basePath('/uc/user/updateUser'), // 更新用户信息
}
